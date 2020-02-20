import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StickyNav = styled.nav`
  top: 0;
  width: 100%;
  z-index: 100;
  height: auto;
  position: sticky;
  padding-bottom: 4rem;
  transition: opacity 0.3s;
  background: ${props => (props.show === true ? "#fff" : "transparant")};
  box-shadow: ${props =>
    props.show === true ? "rgba(15, 15, 15, 0.06) 0 10px 10px 0" : "none"};
`

export const Navigation = styled.div`
  display: grid;
  grid-gap: 5.8rem;
  padding-top: 4rem;
  grid-template-columns: 1fr 3fr;
`

export const NavContainer = styled.div`
  padding: 0;
  width: 1100px;
  margin: 0 auto;
  max-width: 1100px;

  @media (max-width: 850px) {
    width: 768px;
    min-width: 768px;
  }

  @media (max-width: 768px) {
    width: 560px;
    min-width: 768px;
  }
`

export const Brand = styled.div`
  width: 234px;
  height: 31px;
  display: flex;
  font-weight: 800;
  margin-top: 1.1rem;
  align-items: center;
`

export const LogoMark = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.4rem;
  margin-left: 1.2rem;
  font-family: "Montserrat", sans-serif;
`

export const Links = styled.div`
  width: 794px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PageLink = styled(NavLink)`
  color: #232829;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  margin-right: 3rem;
  text-decoration: none;

  &:last-child {
    color: #014045;
    margin-right: 0;
    border-radius: 8px;
    text-align: center;
    background: #e8e8ea;
    transition: all 0.2s;
    padding: 1.7rem 3.4rem;

    &:hover {
      background: #d0d0d1;
    }
  }
`
