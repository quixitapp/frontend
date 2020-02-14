import { authActionTypes } from "../../actions"

const {
  SEND_TOKEN_START,
  SEND_TOKEN_SUCCESS,
  SEND_TOKEN_FAILURE,
} = authActionTypes

const INITIAL_STATE = {
  idToken: "",
  isAuthenticated: false,
  isSetting: false,
  error: null,
}

const setTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_TOKEN_START:
      return {
        ...state,
        isSetting: true,
        idAuthenticated: false,
        idToken: "",
        error: null,
      }
    case SEND_TOKEN_SUCCESS:
      return {
        ...state,
        isSetting: false,
        idAuthenticated: true,
        idToken: action.payload,
        error: null,
      }
    case SEND_TOKEN_FAILURE:
      return {
        ...state,
        isSetting: false,
        idAuthenticated: false,
        idToken: "",
        error: action.payload,
      }
    default:
      return state
  }
}

export default setTokenReducer
