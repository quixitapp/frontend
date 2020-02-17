import React from "react"

import {
  HeaderContainer,
  Container,
  ContainerFlex,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderHero,
  GetStarted,
  HeaderBorder,
  HeaderImg,
} from "./Header.styles"

const Header = props => (
  <>
    <HeaderContainer>
      <Container>
        <ContainerFlex>
          <HeaderTitleContainer>
            <HeaderTitle>Home services, at a click of a button.</HeaderTitle>
            <GetStarted to={`${props.match.url}/signup`}>
              Get Started
            </GetStarted>
          </HeaderTitleContainer>
          <HeaderHero>
            <HeaderImg />
          </HeaderHero>
        </ContainerFlex>
      </Container>
      <HeaderBorder />
    </HeaderContainer>
  </>
)

export default Header
