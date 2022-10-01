import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: [],
    timeStamp: null
}

const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
        dishCallStart(state) {
            state.loader = true
        },
        dishCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        dishCallFaliour(state) {
            state.loader = false
            state.data = []
        }
    },
})

const { dishCallStart, dishCallSuccess, dishCallFaliour } = dishSlice.actions

export const loaddishs = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: dishCallStart.type, 
    onSuccess: dishCallSuccess.type, onError: dishCallFaliour.type
}))

export default dishSlice.reducer