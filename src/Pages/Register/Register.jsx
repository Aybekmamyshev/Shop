import React from 'react';
import "./register.scss"
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
 import {fillRegister} from "../../redux/reducers/user";

const Register = () => {
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

    const useRegister = (data) => {
        axios.post('http://localhost:4040/user',{
            ...data
        })
            .then(({data}) => dispatch(fillRegister(data)) )
            navigate('/')

    }
    return (
        <div className={'register'}>
            <div className="container">
                <h2 className="register__title">Регистрация</h2>
                <form onSubmit={handleSubmit(useRegister)}   className="register__form">
                    <div className="register__wrapper">
                        <div className="register__block">
                            <label className={'register__label'}>
                                <input {...register('name', {
                                    required: {
                                        message:"Заполните имя",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 15 символов',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 3',
                                        value: 3
                                    }
                                })} placeholder={'Имя'} type="text" className={'register__input'}/>
                                <span className={'login__field'}>{errors.name && errors.name.message}</span>

                            </label>
                            <label className={'register__label'}>
                                <input {...register('number',{
                                    required: {
                                        message:"Заполните номер",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 20 символов',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 3',
                                        value: 3
                                    }
                                })} placeholder={'Телефон'} type="text" className={'register__input'}/>
                                <span className={'login__field'}>{errors.number && errors.number.message}</span>

                            </label>
                            <label className={'register__label'}>
                                <input {...register('password',{
                                    required: {
                                        message:"Заполните пароль",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 15 символов',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 3',
                                        value: 3
                                    }
                                })} placeholder={'Пароль'} type="password" className={'register__input'}/>
                                <span className={'login__field'}>{errors.password && errors.password.message}</span>

                            </label>
                        </div>
                        <div className="register__box">
                            <label className={'register__label'}>
                                <input {...register('surname',{
                                    required: {
                                        message:"Заполните фамилию",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 15 символов',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 3',
                                        value: 3
                                    }
                                })} placeholder={'Фамилияя'} type="text" className={'register__input'}/>
                                <span className={'login__field'}>{errors.surname && errors.surname.message}</span>

                            </label>
                            <label className={'register__label'}>
                                <input {...register('email',{
                                    required: {
                                        message:"Заполните email",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 15 символов',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 3',
                                        value: 3
                                    }
                                })} placeholder={'E-mail'} type="email" className={'register__input'}/>
                                <span className={'login__field'}>{errors.email && errors.email.message}</span>

                            </label>
                            <label className={'register__label'}>
                                <input {...register('password',{
                                    required: {
                                        message:"Заполните пароль",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 15 символов',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 3',
                                        value: 3
                                    }
                                })} placeholder={'Повторите пароль'} type="password" className={'register__input'}/>
                                <span className={'login__field'}>{errors.password && errors.password.message}</span>

                            </label>
                        </div>
                    </div>
                    <div className="register__content">
                        <input type="checkbox"/> <span className={'register__span'}>Подпсаться на рассылку</span><br/>
                        <input type="checkbox"/> <span className={'register__span'}>Я согласен с политикой конфиденциальности</span>
                    </div>

                    <div className="register__inner">
                        <button type={'submit'} className={'register__btn'}>Зарегистрироваться</button>
                        <p className="register__txt">У меня уже есть акаунт чтобы <Link className={'register__get'} to={'/login'}>войти</Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;