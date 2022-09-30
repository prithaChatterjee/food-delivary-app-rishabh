import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: [],
    timeStamp: null
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        itemCallStart(state) {
            state.loader = true
        },
        itemCallSuccess(state, action) {
            state.loader = false
            state.data.push(action.payload)
        },
        itemCallFaliour(state) {
            state.loader = false
            state.data = []
        }
    },
})

const { itemCallStart, itemCallSuccess, itemCallFaliour } = itemSlice.actions

export const loadItems = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: itemCallStart.type, 
    onSuccess: itemCallSuccess.type, onError: itemCallFaliour.type
}))

export default itemSlice.reducer