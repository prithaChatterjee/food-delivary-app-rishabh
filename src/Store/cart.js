import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: {},
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        startApiCall: (state) => {
            state.loader = true
        },
        getCart: (state, action) => {
            state.loader = false
            state.data = action.payload
        },
        createCart: (state, action) => {
            state.loader = false
        },
        increment: (state, action) => {
            console.log(action.payload)
        },
        decrement: (state) => {
            state.value -= 1
        },
        cartcallFaliour: (state) => {
            state.loader = false
            state.data = null
        }
    },
})

// Action creators are generated for each case reducer function
export const {createCart, getCart, decrement, startApiCall, cartcallFaliour} = counterSlice.actions

export const handleCartRequest = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: startApiCall.type, onError: cartcallFaliour.type
}))

export default counterSlice.reducer