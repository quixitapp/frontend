import axios from "../../../utils/AxiosAuth"
import { authActionTypes } from "./auth.types"

const { LOG_USER_START, LOG_USER_SUCCESS, LOG_USER_FAILURE } = authActionTypes

export const logUser = token => dispatch => {
  dispatch({ type: LOG_USER_START })

  axios()
    .post(`${process.env.REACT_APP_API_URL}/api/login`)
    .then(res => {
      dispatch({ type: LOG_USER_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: LOG_USER_FAILURE, payload: err.message }))
}
