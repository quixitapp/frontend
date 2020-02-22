import React, { useState } from "react"
import { connect } from "react-redux"
import validator from "validator"

// Actions
import { auth } from "../../../../configs/firebase"
import { logUser } from "../../../../redux/actions"

// Styled Components
import {
  LoginContainer,
  Brand,
  LoginTitle,
  FormContainer,
  FieldContainer,
  FormLabel,
  Inputs,
  Field,
  CustomButton,
  FormButton,
  SignIn,
  Register,
  Instruction,
} from "./Login.styles"

import logo from "../../../../assets/logo.svg"

const Login = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = e => {
    e.preventDefault()

    // Sanitze inputs---------------

    if (
      validator.isEmail(email) &&
      validator.isByteLength(
        email,
        { min: 6, max: 64 } &&
          validator.isByteLength(password, { min: 6, max: 128 })
      )
    ) {
      validator.normalizeEmail(email)
      validator.ltrim(email)
      validator.ltrim(password)
      validator.rtrim(email)
      validator.rtrim(password)
      validator.unescape(password)

      // Sanitze inputs---------------

      auth
        .signInWithEmailAndPassword(email, password)
        .catch(({ code, message }) => {
          console.log(code)
          console.log(message)
        })

      auth.currentUser
        .getIdToken(true)
        .then(idToken => {
          localStorage.setItem("idToken", idToken)
          props.logUser(idToken)
          props.history.push("/onboarding")
        })
        .catch(({ message }) => console.log(message))
    } else {
      props.history.push("/home")
      console.log("Invalid email or Password!")
    }
  }
  return (
    <LoginContainer>
      <Brand>
        <img src={logo} alt="logo" />
        <LoginTitle>Welcome back to Quixit</LoginTitle>
      </Brand>
      <FormContainer onSubmit={onSubmit}>
        <Inputs>
          <FormLabel htmlFor="email">Email*</FormLabel>
          <Field
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email..."
            name="email"
            required
          />
          <FormLabel htmlFor="password">Password*</FormLabel>
          <Field
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password..."
            name="password"
            required
          />
          <SignIn>
            <FieldContainer>
              <CustomButton>
                <FormButton type="submit" value="Log in" />
              </CustomButton>
              <Register to="/home/signup">Need to create an account?</Register>
            </FieldContainer>
            <Instruction>Or connect with:</Instruction>
            <CustomButton isGoogleSignIn>
              <FormButton google type="submit" value="Continue with Google" />
            </CustomButton>
            <CustomButton isFacebookSignIn>
              <FormButton
                facebook
                type="submit"
                value="Continue with Facebook"
              />
            </CustomButton>
          </SignIn>
        </Inputs>
      </FormContainer>
    </LoginContainer>
  )
}

const mapStateToProps = ({ logUserReducer }) => {
  return {
    user: logUserReducer.user,
  }
}

export default connect(mapStateToProps, { logUser })(Login)
