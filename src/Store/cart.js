import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false,
    data: {},
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createCart: (state, action) => {
            console.log(action.payload)
            state.data = action.payload
        },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const {createCart, increment, decrement } = counterSlice.actions

export default counterSlice.reducer