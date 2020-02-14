import React from "react"
import { withRouter, Route, Switch } from "react-router-dom"

import LandingPage from "./pages/landingPage/landingPage.component"
import Login from "./components/LandingPage/Auth/Login/Login.component"
import Signup from "./components/LandingPage/Auth/Signup/Signup.component"

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props => <LandingPage />} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  )
}

export default withRouter(App)
