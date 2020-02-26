import { profileActionTypes } from "../../actions"

const INITIAL_STATE = {
  editing: false,
  user: "",
  error: "",
}

const editProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profileActionTypes.EDIT_PROFILE_START:
      return {
        ...state,
        editing: true,
        user: "",
        error: "",
      }

    case profileActionTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editing: false,
        user: action.payload,
        error: "",
      }

    case profileActionTypes.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editing: false,
        user: "",
        error: action.payload,
      }

    default:
      return state
  }
}

export default editProfileReducer
