import {createSlice} from "@reduxjs/toolkit";

const brandSlice = createSlice({
    name:"brand",
    initialState:{
        data: []
    },
    reducers: {
        getBrand: (state, action) => {
            state.data = action.payload
        }
    }
})

export  const {getBrand} = brandSlice.actions
export default brandSlice.reducer