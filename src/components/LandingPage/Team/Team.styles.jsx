import styled from "styled-components"
import { NavLink } from "react-router-dom"

import contact_border from "../../../assets/contact_border.svg"

export const TeamContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff2dd;
  margin: 0;
  padding: 0;
  padding-bottom: 13rem;
  position: relative;
`

export const Container = styled.div`
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

export const TeamGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`

export const TeamTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #322b28;
  margin: 0;
  margin-bottom: 6rem;
  padding-top: ${props => (props.top ? `${props.top}px` : `0px`)};
`

export const TeamCard = styled.div`
  width: 300px;
  height: 326px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  margin-bottom: 3rem;
`

export const MemberImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.src} center center/cover;
  margin-bottom: 1.4rem;
  border: 0;
`

export const MemberName = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #322b28;
  margin-bottom: 0.8rem;
`
export const Role = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-family: "Montserrat";
  font-weight: 400;
  color: #a8abab;
  margin-bottom: 6rem;
`

export const Links = styled.div`
  display: flex;
  width: 54px;
  heigth: 18px;
  justify-content: space-between;
`

export const Touch = styled(NavLink)`
  height: 18px;
  width: 18px;
  color: #322b28;
  transition: all 0.2s ease-in;
  &:hover {
    opacity: 0.9;
    transform: scale(1.2);
  }
`
export const LinkImg = styled.img`
  background: ${props => props.src};
`

export const TeamBorder = styled.span`
  background: url(${contact_border}) no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  position: absolute;
  border: none;
  width: 100%;
  height: 160px;
  bottom: 0px;
`
