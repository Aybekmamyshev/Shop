import React from 'react';
import "./login.scss"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import axios from "axios";
 import {fillRegister} from "../../redux/reducers/user";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        mode:"onBlur"
    })

    const useLogin = (data) => {
        axios.post('http://localhost:4040/login',data)
            .then(({data}) => {
                dispatch(fillRegister(data))
                navigate('/')

            })
            .catch((err) => console.log(err))


    }

    return (
        <div className={'login'}>
           <div className="login__wrapper">
               <h2 className="login__title">ВХОД</h2>
               <form onSubmit={handleSubmit(useLogin)}  className="login__form">
                   <input className={'login__input'} type="email"/>
                   <input className={'login__input'} type="password"/>
                   <button type={'submit'} className={'login__btn'}> Войти</button>
                   <p className="login__txt">Забыли пароль / <Link className={'login__txt'} to={'/register'}>У меня нет акаунта</Link></p>
               </form>
           </div>
        </div>
    );
};

export default Login;