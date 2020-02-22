import React from "react"
import { withRouter, Route } from "react-router-dom"

import LandingPage from "./pages/landingPage/landingPage.component"

import OnBoardingPage from "./pages/onBoardingPage/onBoarding.component"

function App(props) {
  return (
    <>
      <Route path="/home" render={props => <LandingPage {...props} />} />
      <Route exact path="/onboarding" component={OnBoardingPage} />
    </>
  )
}

export default withRouter(App)
