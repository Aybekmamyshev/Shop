import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './content.scss'
import close from "./icons8-close.svg"
import {deleteHeart} from "../../../redux/reducers/like";
const Content = ({item}) => {
  const dispatch = useDispatch()

    return (
        <div className={'content'}>

                            <div className={'content__card'}>
                                <div className="content__pic">
                                    <img className={'content__image'} src={item.image} alt=""/>
                                </div>

                                <div  className={`content__heart`}>
                                    <h2 className="content__title">{item.title}</h2>
                                    <h3 className="content__subtitle">Classic shoes</h3>

                                    <p className="content__price">{item.price} UAH</p>
                                    <button className={'content__btn'}>Добавить в корзину</button>
                                    <div onClick={() => dispatch(deleteHeart(item.id))} className="content__close">
                                        <img className={'content__cancel'} src={close} alt=""/>
                                    </div>
                                </div>

                            </div>




        </div>
    );
};

export default Content;