import React from "react"
import { withRouter, Route, Switch } from "react-router-dom"

import LandingPage from "./pages/landingPage/landingPage.component"

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/" render={props => <LandingPage />} />
      </Switch>
    </>
  )
}

export default withRouter(App)
