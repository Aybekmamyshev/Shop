import {createSlice} from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: "like",
    initialState: {
       data: [],
        filter: {
            heart: true

        }
     },
    reducers: {
        addHeart: (state, action) => {
            state.data = state.data.findIndex((item) => item.id === action.payload.id) -1 ? [...state.data,action.payload] : [action.payload, ...state.data]

        },
        deleteHeart:(state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
        }
    }
})


export const {addHeart,deleteHeart} = likeSlice.actions
export default likeSlice.reducer