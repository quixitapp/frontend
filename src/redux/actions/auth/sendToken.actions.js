import axios from "../../../utils/AxiosAuth"
import { authActionTypes } from "./auth.types"

const {
  SEND_TOKEN_START,
  SEND_TOKEN_SUCCESS,
  SEND_TOKEN_FAILURE,
} = authActionTypes

export const sendToken = token => dispatch => {
  dispatch({ type: SEND_TOKEN_START })

  axios()
    .post(`${process.env.REACT_APP_API_URL}/api/register`)
    .then(res => {
      dispatch({ type: SEND_TOKEN_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: SEND_TOKEN_FAILURE, payload: err.message }))
}
