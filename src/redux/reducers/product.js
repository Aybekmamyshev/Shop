import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        data: [],
        filter: {
            category : "women",
            price: ''
        },
    },
    reducers: {
        changeGender : (state,action) => {
            state.filter =  {...state.filter,category: action.payload}
        },
        getProduct: (state, action) => {
            state.data = action.payload
        },
        changePrice: (state, action) => {
            state.filter  = {...state.filter,price :action.payload}
        },
        fillRegister: (state, action) => {
            state.user = action.payload
        }

    }
})


export  const  {changeGender,getProduct,changePrice} = productSlice.actions
export default productSlice.reducer