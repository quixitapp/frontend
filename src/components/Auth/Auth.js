import history from "../../history"
import auth0 from "auth0-js"
import { AUTH_CONFIG } from "./auth0-variables"
import axios from "../../utils/AxiosAuth"

const {
  domain,
  clientID,
  redirectUri,
  audience,
  responseType,
  scope,
  url,
} = AUTH_CONFIG

class Auth {
  accessToken
  idToken
  expiresAt

  auth0 = new auth0.WebAuth({
    domain,
    clientID,
    redirectUri,
    responseType,
    audience,
    scope,
    issuer: domain,
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
    this.getIdToken = this.getIdToken.bind(this)
    this.renewSession = this.renewSession.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken)
        this.setSession(authResult)
      else if (err) {
        history.replace("/")
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  getAccessToken() {
    return this.accessToken
  }

  getIdToken() {
    return this.idToken
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("token", authResult.idToken)

    //   Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt = expiresAt

    const user = authResult.idTokenPayload

    axios()
      .post(`${url}/api/register`, user)
      .then(async res => {
        console.log(res.data)

        // if (
        //   (res.data.isBoarded && res.data.isBoarded === 0) ||
        //   res.data.isBoarded === false
        // ) {
        //   await localStorage.setItem("userID", res.data.id)
        //   history.replace("/onboarding")
        // } else if (
        //   (res.data.isBoarded && res.data.isBoarded === 1) ||
        //   res.data.isBoarded === true
        // ) {
        //   if (res.data.account_type === "homeowner") {
        //     localStorage.setItem("userID", res.data.id)
        //     localStorage.setItem("firstName", res.data.first_name)
        //     history.replace(
        //       `/dashboard-homeowner/users/${res.data.id}/projects/`
        //     )
        //   } else if (res.data.account_type === "contractor") {
        //     localStorage.setItem("userID", res.data.id)
        //     localStorage.setItem("firstName", res.data.first_name)
        //     history.replace(
        //       `/dashboard-contractor/users/${res.data.id}/projects/`
        //     )
        //   }
        // } else history.replace("/onboarding")
      })
      .catch(({ message }) => console.log(message))
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        console.log(err.error, err.error_description)
        alert(
          `Could not get  a new token (${err.error}: ${err.error_description})`
        )
      }
    })
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null
    this.idToken = null
    this.expiresAt = 0

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("token")
    localStorage.removeItem("account_type")
    localStorage.removeItem("userID")
    localStorage.removeItem("firstName")
    localStorage.removeItem("isBoarded")
    localStorage.clear()

    this.auth0.logout({
      returnTo: window.location.origin,
    })

    // Navigate to the home route
    setTimeout(() => {
      history.replace("/")
    }, 1000)
  }

  isAuthenticated() {
    //   check if the current time is past the access token's expiry time
    let exipresAt = this.expiresAt
    return new Date().getTime() < exipresAt
  }
}

export default Auth
