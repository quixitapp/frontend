import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Brand = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 3rem;
`

export const LoginTitle = styled.h2`
  margin: 0;
  margin-left: 1.5rem;
  padding: 0;
  font-size: 1.8rem;
  font-weight: 500;
  color: rgba(35, 40, 41, 0.8);
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const FormLabel = styled.label`
  font-size: 1.3rem;
  color: rgba(35, 40, 41, 0.8);
  padding: 0;
  margin: 0;
`

export const Inputs = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 13rem;
  margin-bottom: 3rem;
`

export const FieldContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Field = styled.input`
  width: 100%;
  height: 3.4rem;
  border-radius: .6rem;
  background: #F5F5F7;
  border: none;
  padding: 0;
  padding-left: 1.5rem;
  margin: 0;
  margin: 1.2rem 0;
  font-size: 0.8rem;
  outline: none;
  font-family: "Montserrat Alternates";
  font-size: 1.5rem;

    &::placeholder {
    font-family: "Montserrat Alternates";
    color: #A5A7A8;
    font-size: 1.5rem;
`

export const SignIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Instruction = styled.div`
  font-size: 1.3rem;
  color: rgba(35, 40, 41, 0.8);
  text-align: center;
  margin-bottom: 3rem;
`

// Buttons
export const FormButton = styled.input`
  width: 100%;
  height: auto;
  border: none;
  color: ${props => (props.facebook ? "#fff" : "$000")};
  background: none;
  font-family: "Montserrat Alternates";
  font-size: 1.6rem;
  font-weight: ${props => (props.facebook || props.google ? "500" : "600")};
  cursor: pointer;
  outline: none;
`

const getButtonStyle = props => {
  if (props.isGoogleSignIn) {
    return isGoogleSignInStyles
  }
  if (props.isFacebookSignIn) {
    return isFacebookSignInStyles
  } else {
    return isDefaultStyles
  }
}

const isDefaultStyles = css`
  width: 100%;
  height: 5.2rem !important;
  border-radius: 1rem;
  border: none;
  font-family: "Montserrat Alternates";
  font-size: 1.6rem;
  color: #014045;
  background: #bef3f8;
  margin: 0;
  margin-bottom: 0.6rem;
  margin-top: 3rem;
  transition: all 0.2s;
  &:hover {
    background: #2fe2f3;
  }
`

const isGoogleSignInStyles = css`
  width: 100%;
  height: 5.2rem;
  border-radius: 1rem;
  border: 1px solid #cdcdcd;
  font-family: "Montserrat Alternates";
  font-size: 1.6rem;
  color: #000;
  margin: 0;
  margin-bottom: 0.6rem;
  transition: all 0.2s;
  &:hover {
    opacity: 0.7;
  }
`

const isFacebookSignInStyles = css`
  width: 100%;
  height: 5.2rem;
  border-radius: 1rem;
  background: #004da5;
  border: none;
  font-family: "Montserrat Alternates";
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  margin-bottom: 0.6rem;
  margin-top: 1.5rem;
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
`

export const CustomButton = styled.button`
  cursor: pointer;
  outline: none;
  ${getButtonStyle}
`

export const Register = styled(NavLink)`
  font-size: 1.1rem;
  color: #014045;
  text-align: right;
  padding: 0;
  margin: 0;
  text-decoration: none;
  margin-bottom: 3rem;
`
