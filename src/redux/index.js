import {configureStore} from "@reduxjs/toolkit";
import product from "./reducers/product";
import brand from "./reducers/brand";
import like from "./reducers/like"
import user from "./reducers/user";
const store = configureStore({
    reducer: {
       product,
        brand,
        like,
        user
    }
})

export  default store