import React, { useEffect, useRef } from "react"

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
  const navRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        navRef.current.classList.add("scrolled")
      } else {
        navRef.current.classList.remove("scrolled")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
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
            <PageLink to={`${props.match.url}/login`}>Log in</PageLink>
          </Links>
        </Navigation>
      </NavContainer>
    </StickyNav>
  )
}

export default NavBar
