import { combineReducers } from "redux"
import setTokenReducer from "./authReducers/setTokenReducer"
import setUserReducer from "./authReducers/setUserReducer"
import logUserReducer from "./authReducers/logUserReducer"

export default combineReducers({
  setTokenReducer,
  setUserReducer,
  logUserReducer,
})
