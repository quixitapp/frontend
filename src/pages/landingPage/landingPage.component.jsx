import React from "react"
import { ModalContainer, ModalRoute } from "react-router-modal"

import NavBar from "../../components/LandingPage/NavBar/Navbar.component"
import Header from "../../components/LandingPage/Header/Header.component"
import StoryBoard from "../../components/LandingPage/StoryBoard/StoryBoard.component"
import Team from "../../components/LandingPage/Team/Team.component"
import Contact from "../../components/LandingPage/Contact/Contact.component"
import Footer from "../../components/LandingPage/Footer/Footer.component"
import Login from "../../components/LandingPage/Auth/Login/Login.component"
import Signup from "../../components/LandingPage/Auth/Signup/Signup.component"

import "./landingPage.styles.scss"
import "react-router-modal/css/react-router-modal.css"

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
      <ModalRoute
        path="/login"
        parentPath="/"
        component={Login}
        className="quixit-modal"
        inClassName="quixit-modal-in"
        outClassName="quixit-modal-out"
        backdropClassName="quixit-backdrop"
        backdropInClassName="quixit-backdrop-in"
        backdropOutClassName="quixit-backdrop-out"
        outDelay={300}
      />
      <ModalRoute
        path="/signup"
        parentPath="/"
        component={Signup}
        className="quixit-modal"
        inClassName="quixit-modal-in"
        outClassName="quixit-modal-out"
        backdropClassName="quixit-backdrop"
        backdropInClassName="quixit-backdrop-in"
        backdropOutClassName="quixit-backdrop-out"
        outDelay={800}
      />
      <ModalContainer />
    </>
  )
}

export default LandingPage
