import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: [],
    timeStamp: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoriesCallStart(state) {
            state.loader = true
        },
        categoriesCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        categoriesCallFaliour(state) {
            state.loader = false
            state.data = []
        }
    },
})

const { categoriesCallStart, categoriesCallSuccess, categoriesCallFaliour } = categoriesSlice.actions

export const loadcategories = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: categoriesCallStart.type, 
    onSuccess: categoriesCallSuccess.type, onError: categoriesCallFaliour.type
}))

export default categoriesSlice.reducer