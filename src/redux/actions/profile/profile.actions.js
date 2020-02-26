import axios from "../../../utils/AxiosAuth"
import { profileActionTypes } from "./profile.types"

const {
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
} = profileActionTypes

export const editProfile = user => dispatch => {
  dispatch({ type: EDIT_PROFILE_START })
  axios()
    .post(`${process.env.REACT_APP_API_URL}/api/users`, user)
    .then(res => dispatch({ type: EDIT_PROFILE_SUCCESS, payload: res.data }))
    .catch(({ message }) => {
      console.log(message)
      dispatch({ type: EDIT_PROFILE_FAILURE, payload: message })
    })
}
