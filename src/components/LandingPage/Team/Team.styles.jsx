import styled from "styled-components"
import { NavLink } from "react-router-dom"

import contact_border from "../../../assets/contact_border.svg"

export const TeamContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 13rem;
  background-color: #fff2dd;
`

export const Container = styled.div`
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

export const TeamGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const TeamTitle = styled.h2`
  margin: 0;
  color: #322b28;
  font-weight: 600;
  font-size: 3.2rem;
  margin-bottom: 6rem;
  padding-top: ${props => (props.top ? `${props.top}px` : `0px`)};
`

export const TeamCard = styled.div`
  width: 300px;
  height: 326px;
  display: flex;
  padding: 4rem;
  align-items: center;
  margin-bottom: 3rem;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
`

export const MemberImg = styled.img`
  border: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1.4rem;
  background: ${props => props.src} center center/cover;
`

export const MemberName = styled.h5`
  margin: 0;
  padding: 0;
  color: #322b28;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
`
export const Role = styled.h6`
  margin: 0;
  padding: 0;
  color: #a8abab;
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 6rem;
  font-family: "Montserrat";
`

export const Links = styled.div`
  width: 54px;
  heigth: 18px;
  display: flex;
  justify-content: space-between;
`

export const Touch = styled(NavLink)`
  width: 18px;
  opacity: 0.7;
  height: 18px;
  color: #322b28;
  transition: all 0.2s ease-in;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`
export const LinkImg = styled.img`
  background: ${props => props.src};
`

export const TeamBorder = styled.span`
  margin: 0;
  padding: 0;
  width: 100%;
  bottom: 0px;
  border: none;
  height: 160px;
  position: absolute;
  background-size: cover;
  background: url(${contact_border}) no-repeat;
`
