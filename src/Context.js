import {createContext, useState} from "react";
import React from 'react';
import {useTranslation} from "react-i18next";
export  const CustomContext = createContext()
const Context = (props) => {

  const {t,i18n} = useTranslation()
    const [valueS,setValue] = useState('')
    const  [category,setCategory] = useState('Clothes')
    const [heart,setHeart] = useState(true)
    const [size,setSize] = useState('')
    const [brand,setBrand] =useState('')


    const  changeCategory = (value) => {
       setCategory(value)
    }

    const value = {
        size,
        setSize,
        heart,
        setHeart,
        category,
        setCategory,
        changeCategory,
        t,
        i18n,
        valueS, setValue,brand,setBrand
    }
    return<CustomContext.Provider value={value}>
             {props.children}
         </CustomContext.Provider>

};

export default Context;