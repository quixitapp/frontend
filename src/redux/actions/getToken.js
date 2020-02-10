import axios from "../../utils/AxiosAuth"
import { GET_TOKEN_START, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from "./index"

export const getToken = token => dispatch => {
  dispatch({ type: GET_TOKEN_START })

  axios()
    .post(`${process.env.REACT_APP_API_URL}/api/register`)
    .then(res => {
      console.log("res= ", res)
      dispatch({ type: GET_TOKEN_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GET_TOKEN_FAILURE, payload: err.message }))
}
