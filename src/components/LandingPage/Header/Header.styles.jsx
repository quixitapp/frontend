import styled from "styled-components"
import hero from "../../../assets/hero_img.png"
import header_border from "../../../assets/header_border.svg"
import { NavLink } from "react-router-dom"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 590px;
  background: #f0f0f3;
  margin: 0;
  padding: 0;
  position: relative;
`

export const HeaderHero = styled.div`
  width: 50%;
  height: 100%;
  background: url(${hero}) center left no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  z-index: 1;

  @media (max-width: 850px) {
    width: 49%;
  }
`

export const HeaderImg = styled.img`
  background-repeat: no-repeat;
  background-position: right bottom;
  backgound-size: cover;
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
export const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HeaderTitleContainer = styled.div`
  width: 400px;
  position: absolute;
  top: 5rem;

  @media (max-width: 850px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 260px;
  }
`

export const HeaderTitle = styled.h2`
  font-size: 4.2rem;
  line-height: 1.3;
  color: 232829;
  font-weight: 400;
  margin: 0;
  margin-bottom: 4rem;
  z-index: 2;

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
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  background: #a0eef5;
  border-radius:  8px;
  border: none;
  text-align: center;
  color:#014045;
  padding: 1.6rem 3rem;
  transition: all 0.2s;
  z-index: 2;
    &:hover {
      background: #2FE2F3;
    }
  }
`
export const HeaderBorder = styled.span`
  background: url(${header_border}) no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  position: absolute;
  border: none;
  width: 100%;
  height: 160px;
  bottom: 0px;
  z-index: 2;
`
