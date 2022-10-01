import { combineReducers } from 'redux'
import itemReducer from '../items'
import userReducer from '../user'
import locationReducer from '../locations'
import categoryReducer from '../categories'
import resturentReducer from "../resturents";
import dishesReducer from '../dishes'

export default combineReducers({
  itemReducer,
  userReducer,
  locationReducer,
  categoryReducer,
  resturentReducer,
  dishesReducer
})