import { authActionTypes } from "../../actions"

const {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} = authActionTypes

const INITIAL_STATE = {
  user: "",
  isSetting: false,
  error: null,
}

const setUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        user: "",
        isSetting: true,
        error: null,
      }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isSetting: false,
        error: null,
      }

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: "",
        isSetting: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default setUserReducer
