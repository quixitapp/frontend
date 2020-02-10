import React from "react"
import { withRouter, Route, Switch } from "react-router-dom"

import Auth from "./components/Auth/Auth"
import LandingPage from "./pages/landingPage/landingPage.component"
import Callback from "./components/Callback/Callback.component"

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash))
    auth.handleAuthentication()
}

function App(props) {
  const login = () => {
    auth.login()
  }
  const logout = () => {
    setTimeout(() => {
      auth.logout()
    }, 1000)
  }
  const { isAuthenticated } = auth
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <LandingPage
              {...props}
              isAuthenticated={isAuthenticated}
              login={login}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/callback"
          render={props => {
            handleAuthentication(props)
            return <Callback {...props} />
          }}
        />
      </Switch>
    </>
  )
}

export default withRouter(App)
