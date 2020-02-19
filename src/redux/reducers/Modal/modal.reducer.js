import { modalActionTypes } from "../../actions"

const INITIAL_STATE = {
  isOpen: false,
  isClosed: true,
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.OPEN_MODAL:
      return {
        ...state,
        isClosed: false,
        isOpen: true,
      }
    case modalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isClosed: true,
        isOpen: false,
      }
    default:
      return state
  }
}

export default modalReducer
