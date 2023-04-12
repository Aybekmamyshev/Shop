import React, {useContext, useState} from 'react';
import "./Aside.scss"
import {useDispatch, useSelector} from "react-redux";
import {changeGender} from "../../../redux/reducers/product";
import {CustomContext} from "../../../Context";
import Item from "./Item/Item";
const Aside = () => {
    const  dispatch = useDispatch()
    const {category,setCategory} = useContext(CustomContext)
    const  {filter} = useSelector((store) => store.product)
     const [open, setOpen] = useState(true)
    const  gender  = [ "Women","Men"]

    const  changeCategory = (value) => {
        setCategory(value)
        setOpen(!open)
    }
    return (
        <div className={'aside'}>
            <div className="aside__wrapper">
                {
                    gender.map((item) => (
                        <p onClick={() => dispatch(changeGender(item))} className={`aside__gender${filter.category === item ? 'active': ''}`}>
                            {item === 'Women' && 'Женщины'}
                            {item === 'Men' && 'Мужчины'}
                        </p>
                    ))
                }
             </div>
            <ul className="aside__list">
                <Item value={'Clothes'} text={'Одежда'}/>
                <Item value={'T-short'} text={'Футболки'}/>
                <Item value={'Shoes'} text={'Обувь'}/>
                <Item value={'Pants'} text={'Штаны'}/>
            </ul>
        </div>
    );
};

export default Aside;