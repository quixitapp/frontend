import React, { useState } from "react"
import { connect } from "react-redux"
import { sendToken, registerUser } from "../../../../redux/actions"
import { auth, provider } from "../../../../configs/firebase"

import {
  RegisterContainer,
  Brand,
  RegisterTitle,
  FormContainer,
  Split,
  SplitCheck,
  Inputs,
  FieldContainer,
  CheckContainer,
  CheckLabel,
  CheckBoxOn,
  CheckBoxOff,
  Field,
  Select,
  Options,
  CustomButton,
  Register,
  LoginBtn,
  Instruction,
  FormLabel,
  FormButton,
} from "./Signup.styles"

import logo from "../../../../assets/logo.svg"

const Signup = props => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isContractor, setIsContractor] = useState(false)
  const [category, setCategory] = useState("")
  const [zipCode, setZipCode] = useState(0)

  const onSubmit = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(({ message }) => console.log(message))

    auth.onAuthStateChanged(user => {
      if (user) {
        user
          .getIdToken(true)
          .then(idToken => {
            localStorage.setItem("idToken", idToken)
            if (idToken) {
              if (!isContractor) {
                const homeowner = {
                  uid: user.uid,
                  firstName,
                  lastName,
                  isContractor: false,
                  email,
                }
                props.sendToken(idToken)
                props.registerUser(homeowner)
              } else {
                const contractor = {
                  uid: user.uid,
                  firstName,
                  lastName,
                  isContractor,
                  category,
                  zipCode,
                  email,
                }
                props.sendToken(idToken)
                props.registerUser(contractor)
              }
            } else console.log("Not logged in.")
          })
          .catch(err => console.log(err))
      } else {
        console.log("error")
      }
    })
  }

  const googleSingIn = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      console.log(user)
    })
  }

  const renderCheckBox = () => {
    if (!isContractor) {
      return (
        <CheckBoxOff
          onChange={e => {
            setIsContractor(!isContractor)
            props.contractor(true)
          }}
          type="checkbox"
          name="isContractor"
          checked={isContractor}
        />
      )
    } else {
      return (
        <CheckBoxOn
          onChange={e => {
            setIsContractor(!isContractor)
            props.contractor(false)
          }}
          type="checkbox"
          name="isContractor"
          checked={isContractor}
        />
      )
    }
  }
  return (
    <RegisterContainer>
      <Brand>
        <img src={logo} alt="logo" />
        <RegisterTitle>Welcome to Quixit</RegisterTitle>
      </Brand>
      <FormContainer onSubmit={onSubmit}>
        <Inputs>
          <Split>
            <FieldContainer>
              <FormLabel htmlFor="firstName">First Name*</FormLabel>
              <Field
                onChange={e => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                placeholder="Enter first name..."
                required
              />
            </FieldContainer>
            <FieldContainer>
              <FormLabel htmlFor="lastName">Last Name*</FormLabel>
              <Field
                onChange={e => setLastName(e.target.value)}
                type="text"
                name="lastName"
                placeholder="Enter last name..."
                required
              />
            </FieldContainer>
          </Split>
          <Split>
            <FieldContainer>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <Field
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Enter email..."
                required
              />
            </FieldContainer>
            <FieldContainer>
              <FormLabel htmlFor="password">Password*</FormLabel>
              <Field
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Enter password..."
                required
              />
            </FieldContainer>
          </Split>
          <CheckContainer>
            {renderCheckBox()}
            <CheckLabel htmlFor="isContractor">I am a contractor</CheckLabel>
          </CheckContainer>

          <SplitCheck show={isContractor === true ? true : false}>
            <FieldContainer>
              <FormLabel htmlFor="categories">Categories*</FormLabel>
              <Select
                onChange={e => setCategory(e.target.value)}
                name="categories"
                required>
                <Options value="Select a category">Select a category</Options>
                <Options value="Plumbing">Carpenter</Options>
                <Options value="Plumbing">Cleaning</Options>
                <Options value="Plumbing">Electrician</Options>
                <Options value="Plumbing">Plumber</Options>
                <Options value="Plumbing">Painter</Options>
              </Select>
            </FieldContainer>
            <FieldContainer>
              <FormLabel htmlFor="zip code">Zip Code*</FormLabel>
              <Field
                onChange={e => setZipCode(e.target.value)}
                type="number"
                placeholder="Enter zip code..."
                required
              />
            </FieldContainer>
          </SplitCheck>

          <Register>
            <FieldContainer>
              <CustomButton>
                <FormButton type="submit" value="Sign up" />
              </CustomButton>
              <LoginBtn to="/home/login">Already have an account?</LoginBtn>
            </FieldContainer>
            <Instruction>Or connect with:</Instruction>

            <CustomButton isGoogleSignIn>
              <FormButton
                google
                onClick={() => googleSingIn()}
                type="submit"
                value="Continue with Google"
              />
            </CustomButton>

            <CustomButton isFacebookSignIn>
              <FormButton
                facebook
                type="submit"
                value="Continue with Facebook"
              />
            </CustomButton>
          </Register>
        </Inputs>
      </FormContainer>
    </RegisterContainer>
  )
}

const mapStateToProps = ({ setTokenReducer, setUserReducer }) => {
  return {
    idToken: setTokenReducer.idToken,
    user: setUserReducer.user,
  }
}

export default connect(mapStateToProps, { sendToken, registerUser })(Signup)
