import React from 'react';
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const NotFound = () => {
    // const {user} = useSelector((store) => store.user)
    //
    //
    //
    // if (!user.register.length) {
    //     return (
    //         <Navigate to={'/register'}/>
    //     )
    // }
    return (
        <div>
            <Navigate to={'/'}/>
        </div>
    );
};

export default NotFound;