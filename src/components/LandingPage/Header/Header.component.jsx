import React from "react"
import { Route, Switch } from "react-router-dom"

import Backdrop from "../../CustomModal/Backdrop/Backdrop.component"
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
  return (
    <>
      {props.isOpen && (
        <Backdrop
          closing={props.closing}
          isOpen={props.isOpen}
          closeModal={props.closeModal}
          {...props}
        />
      )}
      {/* {props.isOpen && (
        <Modal closing={props.closing} isOpen={props.isOpen}>
          <Signup />
        </Modal>
      )} */}
      <HeaderContainer>
        <Container>
          <ContainerFlex>
            <HeaderTitleContainer>
              <HeaderTitle>Home services, at a click of a button.</HeaderTitle>
              <GetStarted onClick={props.openModal} to="/landing/signup">
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
          path="/landing/signup"
          render={props => {
            return (
              <Modal closing={props.closing} isOpen={props.isOpen}>
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
