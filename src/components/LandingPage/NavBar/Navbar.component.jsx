import React, { useEffect, useRef } from "react"
import { Route, Switch } from "react-router-dom"

import Modal from "../../CustomModal/Modal/Modal.component"
import Login from "../Auth/Login/Login.component"

import logo from "../../../assets/logo.svg"

import {
  StickyNav,
  Navigation,
  NavContainer,
  Brand,
  LogoMark,
  Links,
  PageLink,
} from "./Navbar.styles.jsx"

const NavBar = props => {
  const { isOpen, closing, history, openModal } = props
  const navRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        navRef.current.classList.add("scrolled")
        navRef.current.classList.add("animated")
        navRef.current.classList.add("fadeIn")
        navRef.current.classList.add("fast")
      } else {
        navRef.current.classList.remove("scrolled")
        navRef.current.classList.remove("animated")
        navRef.current.classList.remove("fadeIn")
        navRef.current.classList.remove("fast")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <StickyNav ref={navRef}>
        <NavContainer>
          <Navigation>
            <Brand>
              <img src={logo} alt="logo" />
              <LogoMark>Quixit</LogoMark>
            </Brand>
            <Links>
              <PageLink to="#">How it works</PageLink>
              <PageLink to="#">Meet the team</PageLink>
              <PageLink to="#">Contact</PageLink>
              <PageLink to="#">About us</PageLink>
              <PageLink to="#">Become a Quixer</PageLink>
              <PageLink onClick={openModal} to="/home/login">
                Log in
              </PageLink>
            </Links>
          </Navigation>
        </NavContainer>
      </StickyNav>
      <Switch>
        <Route
          path="/home/login"
          render={() => {
            return (
              <Modal closing={closing} isOpen={isOpen} history={history}>
                <Login />
              </Modal>
            )
          }}
        />
      </Switch>
    </>
  )
}

export default NavBar
