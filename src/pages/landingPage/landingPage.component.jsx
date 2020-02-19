import React, { useState } from "react"

import NavBar from "../../components/LandingPage/NavBar/Navbar.component"
import Header from "../../components/LandingPage/Header/Header.component"
import StoryBoard from "../../components/LandingPage/StoryBoard/StoryBoard.component"
import Team from "../../components/LandingPage/Team/Team.component"
import Contact from "../../components/LandingPage/Contact/Contact.component"
import Footer from "../../components/LandingPage/Footer/Footer.component"

import "./landingPage.styles.scss"
import "react-router-modal/css/react-router-modal.css"

const LandingPage = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const openModal = () => {
    setIsOpen(true)
    setClosing(false)
  }

  const closeModal = () => {
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
        openModal={openModal}
        closeModal={closeModal}
        login={props.login}
        logout={props.logout}
      />
      <Header
        closing={closing}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        {...props}
      />
      <StoryBoard />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
