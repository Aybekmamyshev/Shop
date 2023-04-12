import React, {useContext} from 'react';
import {useDispatch} from "react-redux";
import {CustomContext} from "../../../../Context";
import "./item.scss"
const Item = ({text,value}) => {
    const {category,changeCategory} = useContext(CustomContext)
    return (
        <div className={'item'}>
            <li onClick={() => changeCategory(value)} className={`item__item ${category === value ? 'active' : ''}`}>
                {text}
                <div className="item__svg">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0V10" stroke="black"/>
                        <path d="M0 5L10 5" stroke="black"/>
                    </svg>
                </div>
            </li>
        </div>
    );
};

export default Item;