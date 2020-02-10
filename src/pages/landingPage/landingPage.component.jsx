import React from "react"
import "./landingPage.styles.scss"

import NavBar from "../../components/LandingPage/NavBar/Navbar.component"
import Header from "../../components/LandingPage/Header/Header.component"
import StoryBoard from "../../components/LandingPage/StoryBoard/StoryBoard.component"
import Team from "../../components/LandingPage/Team/Team.component"
import Contact from "../../components/LandingPage/Contact/Contact.component"
import Footer from "../../components/LandingPage/Footer/Footer.component"

const LandingPage = props => {
  return (
    <>
      <NavBar
        {...props}
        isAuthenticated={props.isAuthenticated}
        login={props.login}
        logout={props.logout}
      />
      <Header login={props.login} logout={props.logout} />
      <StoryBoard />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
