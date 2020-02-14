import axios from "../../../utils/AxiosAuth"
import { authActionTypes } from "./auth.types"

const {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} = authActionTypes

export const registerUser = user => dispatch => {
  dispatch({ type: REGISTER_USER_START })

  axios()
    .post(`http://localhost:5000/api/register`, user)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
    })
    .catch(err =>
      dispatch({ type: REGISTER_USER_FAILURE, payload: err.message })
    )
}
