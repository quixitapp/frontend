import React from "react"
import { Route, Switch } from "react-router-dom"

import Overlay from "../../CustomModal/Overlay/Overlay.component"
import Modal from "../../CustomModal/Modal/Modal.component"

import Signup from "../Auth/Signup/Signup.component"

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

const Header = props => {
  const { isOpen, closing, history, closeModal, openModal } = props
  return (
    <>
      {isOpen && (
        <Overlay
          closing={closing}
          isOpen={isOpen}
          history={history}
          closeModal={closeModal}
        />
      )}
      <HeaderContainer>
        <Container>
          <ContainerFlex>
            <HeaderTitleContainer>
              <HeaderTitle>Home services, at a click of a button.</HeaderTitle>
              <GetStarted onClick={openModal} to="/home/signup">
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
      <Switch>
        <Route
          path="/home/signup"
          render={() => {
            return (
              <Modal closing={closing} isOpen={isOpen} history={history}>
                <Signup />
              </Modal>
            )
          }}
        />
      </Switch>
    </>
  )
}

export default Header
