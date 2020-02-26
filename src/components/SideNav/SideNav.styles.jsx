import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NavContainer = styled.nav`
  width: 10%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e2e2e2;
  font-family: "Montserrat";
`

export const Top = styled.div`
  width: 100%;
  height: 23.5rem;
  padding: 4rem;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Bottom = styled.div`
  width: 100%;
  height: 84.2%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

export const Brand = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 4rem;
`
export const Link = styled(NavLink)`
  font-family: Montserrat Alternates;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(1, 64, 69);
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 2rem;
`
