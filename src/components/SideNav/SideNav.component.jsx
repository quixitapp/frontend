import React from "react"

import { NavContainer, Top, Bottom, Brand, Link } from "./SideNav.styles"

const SideNav = props => {
  return (
    <NavContainer>
      <Top>
        <Brand>Quixit</Brand>
        <Link to="/user/:id/dashboard">Dashboard</Link>
        <Link to="/user/:id/add-project">New Project</Link>
        <Link to="/user/:id/projects">Projects</Link>
      </Top>
      <Bottom>
        <Link to="/user/:id/edit-profile">Settings</Link>
        <Link to="/help">Help</Link>
      </Bottom>
    </NavContainer>
  )
}

export default SideNav
