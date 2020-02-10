import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StickyNav = styled.nav`
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  z-index: 100;
  padding-bottom: 4rem;
  spadding-bottom: 8rem;
`

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5.8rem;
  padding-top: 4rem;
`

export const NavContainer = styled.div`
  width: 1100px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;

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
  align-items: center;
  margin-top: 1.1rem;
`

export const LogoMark = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.4rem;
  font-family: "Montserrat", sans-serif;
  margin-left: 1.2rem;
`

export const Links = styled.div`
  width: 794px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PageLink = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #232829;
  text-align: center;
  margin-right: 3rem;

  &:last-child {
    background: #e8e8ea;
    color: #014045;
    border-radius: 8px;
    padding: 1.7rem 3.4rem;
    text-align: center;
    margin-right: 0;
    transition: all 0.2s;

    &:hover {
      background: #d0d0d1;
    }
  }
`
