import React, {useContext, useEffect} from 'react';
import Brand from "./BrandSection/Brand";
import Aside from "./Aside/Aside";
import "./Catalog.scss"
import Card from "./Card/Card";
import {CustomContext} from "../../Context";
import {useDispatch, useSelector} from "react-redux";
import axios, {get} from "axios";
import {getProduct} from "../../redux/reducers/product";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import {getBrand} from "../../redux/reducers/brand";
const Catalog = ({value}) => {
    const {filter,data} = useSelector((store) => store.product)
    const dispatch = useDispatch()

    const {category,valueS,price,size,brand} = useContext(CustomContext)

    useEffect(() => {
        axios(`http://localhost:4040/catalog?gender=${filter.category}&category=${category}${filter.price !== '' ? '&_sort=price&_order=' +  filter.price : ''}${brand !== '' ? '&Brand' + brand : ''}`)
            .then(({data}) => {
                dispatch(getProduct(data))
                axios(`http://localhost:4040/brand?category=${category}&gender=${filter.category}`)
                    .then(({data}) => dispatch(getBrand(data[0].brand)))
                    .catch(() => alert("Бренд не найден"))
            })

    },[filter.category,category, filter.price,brand])
    return (
        <div className={'catalog'}>
            <div className="container">
                <Brand/>
                <div className="catalog__content">
                    <aside className="catalog__aside">
                       <Aside/>
                    </aside>
                    <div className="catalog__right">
                        <h2 className="catalog__title">
                            {category === 'Clothes' && 'Одежда'}
                            {category === 'T-short' && 'Футболка'}
                            {category === 'Shoes' && 'Обувь'}
                            {category === 'Pants' && 'Штаны'}
                        </h2>
                        <CatalogFilter/>
                        <div className="catalog__wrapper">
                            {

                                data.filter((item) => item.title.toLowerCase().includes(valueS.toLowerCase())).filter((item) => {
                                   return   size ? item.sizes.find((el) => el.size == size)  : item
                                }).map((item) => (
                                    <Card item={item}/>
                                ))

                            }
                         </div>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Catalog;