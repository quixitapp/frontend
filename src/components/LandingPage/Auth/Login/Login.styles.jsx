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
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: flex-start;
`

export const LoginTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.8rem;
  margin-left: 1.5rem;
  color: rgba(35, 40, 41, 0.8);
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const FormLabel = styled.label`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  color: rgba(35, 40, 41, 0.8);
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
  margin: 0;
  padding: 0;
  width: 100%;
  border: none;
  outline: none;
  height: 3.4rem;
  margin: 1.2rem 0;
  font-size: 0.8rem;
  font-size: 1.5rem;
  background: #f5f5f7;
  border-radius: 0.6rem;
  padding-left: 1.5rem;
  font-family: "Montserrat Alternates";

  &::placeholder {
    color: #a5a7a8;
    font-size: 1.5rem;
    font-family: "Montserrat Alternates";
  }
`

export const SignIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Instruction = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: rgba(35, 40, 41, 0.8);
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
  margin: 0;
  width: 100%;
  border: none;
  color: #014045;
  margin-top: 3rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  background: #bef3f8;
  transition: all 0.2s;
  margin-bottom: 0.6rem;
  height: 5.2rem !important;
  font-family: "Montserrat Alternates";
  &:hover {
    background: #2fe2f3;
  }
`

const isGoogleSignInStyles = css`
  margin: 0;
  width: 100%;
  color: #000;
  height: 5.2rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  transition: all 0.2s;
  margin-bottom: 0.6rem;
  border: 1px solid #cdcdcd;
  font-family: "Montserrat Alternates";
  &:hover {
    opacity: 0.7;
  }
`

const isFacebookSignInStyles = css`
  margin: 0;
  width: 100%;
  color: #fff;
  border: none;
  height: 5.2rem;
  font-weight: 600;
  font-size: 1.6rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  background: #004da5;
  transition: all 0.2s;
  margin-bottom: 0.6rem;
  font-family: "Montserrat Alternates";
  &:hover {
    opacity: 0.9;
  }
`

export const CustomButton = styled.button`
  outline: none;
  cursor: pointer;
  ${getButtonStyle}
`

export const Register = styled(NavLink)`
  margin: 0;
  padding: 0;
  color: #014045;
  text-align: right;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-decoration: none;
`
