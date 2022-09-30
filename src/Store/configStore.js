import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './CombineReducer'
import api from './Middleware/api'

export default configureStore({
    reducer : combineReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    devTools: process.env.NODE_ENV !== 'production',
})
