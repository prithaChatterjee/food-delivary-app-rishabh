import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: null,
    timeStamp: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userCallStart(state) {
            state.loader = true
        },
        userCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        userCallFaliour(state) {
            state.loader = false
            state.data = null
        }
    },
})

const { userCallStart, userCallSuccess, userCallFaliour } = userSlice.actions

export const loaduser = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: userCallStart.type, 
    onSuccess: userCallSuccess.type, onError: userCallFaliour.type
}))

export default userSlice.reducer