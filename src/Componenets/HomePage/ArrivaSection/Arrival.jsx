import React, {useContext} from 'react';
import first from './image 34.png'
import second from './second.png'
import "./arrival.scss"
import {CustomContext} from "../../../Context";
import {Link} from "react-router-dom";
const Arrival = () => {
    const {i18n,t} = useContext(CustomContext)
    return (
        <section className={'arrival'}>
            <div   className="arrival__block">
                <div className="arrival__picture">
                    <img src={second} alt=""/>
                </div>
                <div className="arrival__inner">
                    <h2 className="arrival__title"> {t('header.new')}</h2>
                    <p className="arrival__txt">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
                    <Link to={'/catalog'} className="arrival__look">{t('header.collection')}</Link>
                </div>
             </div>
            <div className="arrival__box">
                <div className="arrival__img">
                    <img src={first} alt="" className="arrival__pic"/>
                </div>
            </div>
        </section>
    );
};

export default Arrival;