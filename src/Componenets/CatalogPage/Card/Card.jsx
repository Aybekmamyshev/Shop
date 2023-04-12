import React, {useContext} from 'react';
import "./card.scss"

import {CustomContext} from "../../../Context";
import {useDispatch, useSelector} from "react-redux";
import {addHeart} from "../../../redux/reducers/like";
const Card = ({item}) => {
    const dispatch = useDispatch()
    const {heart, setHeart} = useContext(CustomContext)
    const onClickHeart = () => {
        setHeart(!heart)
    }
    return (
        <div className={'card'}>
            <div className="card__pic">
                <img className={'card__image'} src={item.image} alt=""/>
            </div>

            <div onClick={onClickHeart} className={`card__heart ${ !heart ? 'active' : ''}`}>
                {
                   heart ?
                        <svg  onClick={() => dispatch(addHeart(item))}  width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z"
                                  stroke="#0F303F" strokeLinecap="round"/>
                        </svg> :

                        <svg  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="7" fill="#FEF0F0"/>
                            <path
                                d="M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z"
                                fill="#FF8585"/>
                        </svg>


                }


            </div>


            <h2 className="card__title">{item.title}</h2>
            <h3 className="card__subtitle">{item.Brand}</h3>
            <p className="card__price">{item.price} UAH</p>
        </div>
    );
};

export default Card;