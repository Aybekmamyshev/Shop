import React from 'react';

import "./like.scss"
import Content from "./ContentSection/Content";
import {useSelector} from "react-redux";

const LikeSection = () => {
    const {data} = useSelector((store) => store.like)

    return (
        <div className={'like'}>
            <div className="container">
                {
                    data.map((item) => (
                        <Content item={item}/>

                    ))
                }
             </div>



        </div>

    );
};

export default LikeSection;