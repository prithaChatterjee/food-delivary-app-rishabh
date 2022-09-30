import { combineReducers } from 'redux'
import itemReducer from '../items'
import userReducer from '../user'
import locationReducer from '../locations'

export default combineReducers({
  itemReducer,
  userReducer,
  locationReducer
})