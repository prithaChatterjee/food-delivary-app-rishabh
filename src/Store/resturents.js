import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: [],
    timeStamp: null
}

const resturentsSlice = createSlice({
    name: 'resturents',
    initialState,
    reducers: {
        resturentsCallStart(state) {
            state.loader = true
        },
        resturentsCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        resturentsCallFaliour(state) {
            state.loader = false
            state.data = []
        }
    },
})

const { resturentsCallStart, resturentsCallSuccess, resturentsCallFaliour } = resturentsSlice.actions

export const loadresturents = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: resturentsCallStart.type, 
    onSuccess: resturentsCallSuccess.type, onError: resturentsCallFaliour.type
}))

export default resturentsSlice.reducer