import styled from "styled-components"
import hero from "../../../assets/hero_img.png"
import header_border from "../../../assets/header_border.svg"
import { NavLink } from "react-router-dom"

export const HeaderContainer = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 590px;
  position: relative;
  background: #f0f0f3;
`

export const HeaderHero = styled.div`
  right: 0;
  z-index: 1;
  width: 50%;
  height: 100%;
  position: absolute;
  background: url(${hero}) center left no-repeat;
  background-size: cover;

  @media (max-width: 850px) {
    width: 49%;
  }
`

export const HeaderImg = styled.img`
  backgound-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
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
export const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HeaderTitleContainer = styled.div`
  top: 5rem;
  width: 400px;
  position: absolute;

  @media (max-width: 850px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 260px;
  }
`

export const HeaderTitle = styled.h2`
  margin: 0;
  z-index: 2;
  color: 232829;
  line-height: 1.3;
  font-weight: 400;
  font-size: 4.2rem;
  margin-bottom: 4rem;

  @media (max-width: 850px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`

export const GetStarted = styled(NavLink)`
  width: 154px;
  height: 52px;
  border: none;
  color:#014045;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  background: #a0eef5;
  border-radius:  8px;
  padding: 1.6rem 3rem;
  transition: all 0.2s;
  text-decoration: none;
  z-index: 2;
    &:hover {
      background: #2FE2F3;
    }
  }
`
export const HeaderBorder = styled.span`
  margin: 0;
  z-index: 2;
  padding: 0;
  bottom: 0px;
  width: 100%;
  border: none;
  height: 160px;
  position: absolute;
  background: url(${header_border}) no-repeat;
  background-size: cover;
`
