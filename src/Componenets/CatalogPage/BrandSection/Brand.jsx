import React, {useContext} from 'react';
import "./brand.scss"
import {useSelector} from "react-redux";
import {CustomContext} from "../../../Context";
const Brand = () => {
    const  {filter} = useSelector((store) => store.product)
    const {category} = useContext(CustomContext)
    return (
        <section className={'brand'}>
            <ul className="brand__list">
                <li className="brand__item">Главная</li>
                <li className="brand__item brand__item_el">
                    {filter.category === "women" && "Пол"}
                    {filter.category === 'Women' && "Женщины"}
                    {filter.category === 'Men' && "Мужчины"}
                </li>
                <li className="brand__item">
                    {category === 'Clothes' && 'Одежда'}
                    {category === 'T-short' && 'Футболка'}
                    {category === 'Shoes' && 'Обувь'}
                    {category === 'Pants' && 'Штаны'}

                </li>
            </ul>
        </section>
    );
};

export default Brand;