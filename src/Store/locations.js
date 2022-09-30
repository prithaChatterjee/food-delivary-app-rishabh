import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: [],
    timeStamp: null
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        locationCallStart(state) {
            state.loader = true
        },
        locationCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        locationCallFaliour(state) {
            state.loader = false
            state.data = []
        }
    },
})

const { locationCallStart, locationCallSuccess, locationCallFaliour } = locationSlice.actions

export const loadlocation = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: locationCallStart.type, 
    onSuccess: locationCallSuccess.type, onError: locationCallFaliour.type
}))

export default locationSlice.reducer