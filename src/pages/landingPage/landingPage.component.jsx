import React, { useState } from "react"
import { Route } from "react-router-dom"

import NavBar from "../../components/LandingPage/NavBar/Navbar.component"
import Header from "../../components/LandingPage/Header/Header.component"
import StoryBoard from "../../components/LandingPage/StoryBoard/StoryBoard.component"
import Team from "../../components/LandingPage/Team/Team.component"
import Contact from "../../components/LandingPage/Contact/Contact.component"
import Footer from "../../components/LandingPage/Footer/Footer.component"
import Login from "../../components/LandingPage/Auth/Login/Login.component"
import Signup from "../../components/LandingPage/Auth/Signup/Signup.component"

import "./landingPage.styles.scss"

const LandingPage = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const open = () => {
    setIsOpen(true)
    setClosing(false)
  }

  const close = () => {
    setClosing(true)

    setTimeout(() => {
      setIsOpen(false)
    }, 350)
  }

  return (
    <>
      <NavBar
        {...props}
        isAuthenticated={props.isAuthenticated}
        closing={closing}
        isOpen={isOpen}
        openModal={open}
        closeModal={close}
        login={props.login}
        logout={props.logout}
      />
      <Header
        closing={closing}
        isOpen={isOpen}
        openModal={open}
        closeModal={close}
        history={props.history}
      />
      <StoryBoard />
      <Team />
      <Contact />
      <Footer />
      <Route path="/user" components={{ login: Login, signup: Signup }} />
    </>
  )
}

export default LandingPage
