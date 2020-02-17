import React from "react"
import { withRouter, Route, Switch } from "react-router-dom"

import LandingPage from "./pages/landingPage/landingPage.component"
import OnBoardingPage from "./pages/onBoardingPage/onBoarding.component"

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/home" render={props => <LandingPage {...props} />} />
        <Route exact patch="/onboarding" component={OnBoardingPage} />
      </Switch>
    </>
  )
}

export default withRouter(App)
