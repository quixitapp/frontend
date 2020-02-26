import { combineReducers } from "redux"
import setTokenReducer from "./authReducers/setTokenReducer"
import setUserReducer from "./authReducers/setUserReducer"
import logUserReducer from "./authReducers/logUserReducer"
import modalReducer from "./Modal/modal.reducer"
import editProfileReducer from "./profile/profile.reducer"

export default combineReducers({
  setTokenReducer,
  setUserReducer,
  logUserReducer,
  modalReducer,
  editProfileReducer,
})
