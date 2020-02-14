import axios from "axios"

export default () => {
  const token = localStorage.getItem("idToken")
  return axios.create({
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  })
}
