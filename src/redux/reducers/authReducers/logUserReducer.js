import { authActionTypes } from "../../actions"

const { LOG_USER_START, LOG_USER_SUCCESS, LOG_USER_FAILURE } = authActionTypes

const INITIAL_STATE = {
  user: "",
  isSetting: false,
  error: null,
}

const logUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_USER_START:
      return {
        ...state,
        user: "",
        isSetting: true,
        error: null,
      }

    case LOG_USER_SUCCESS:
      return {
        ...state,
        isSetting: false,
        user: action.payload,
        error: null,
      }

    case LOG_USER_FAILURE:
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

export default logUserReducer
