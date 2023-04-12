import React, {useContext} from 'react';
import "./women.scss"
import photo from './women.jpg'
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../../Context";
const Women = () => {
    const {t} = useContext(CustomContext)

    return (
        <div style={{background:`url(${photo})`,backgroundRepeat: 'no-repeat'}} className={'women'}>
             <div className="container">
               <div className="women__block">
                   <h2 className="women__title">{t('header.brand')}</h2>
                   <h3 className="women__subtitle">american vintage</h3>
                   <p className="women__txt">{t('header.show')}</p>
               </div>
            </div>
        </div>
    );
};

export default Women;