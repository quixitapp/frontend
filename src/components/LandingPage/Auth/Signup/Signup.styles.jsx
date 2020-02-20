import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8rem;
  flex-direction: column;
  justify-content: flex-start;
`

export const Brand = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: flex-start;
`

export const RegisterTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.8rem;
  margin-left: 1.5rem;
  color: rgba(35, 40, 41, 0.8);
`

export const FormContainer = styled.form`
  width: 100%;
  height: 44rem;
  display: flex;
  flex-direction: column;
  justify-content: flext-start;
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
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;
`

export const Split = styled.div`
  width: 100%;
  height: 8rem;
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  grid-template-columns: 4fr 4fr;
`

export const SplitCheck = styled.div`
  width: 100%;
  height: 8rem;
  grid-gap: 2rem;
  transition: all 1s;
  align-items: center;
  grid-template-columns: 4fr 4fr;
  opacity: ${props => (props.show === false ? "0" : "1")};
  display: ${props => (props.show === false ? "none" : "grid")};
`

export const FieldContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
`

export const CheckContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  margin: 2rem 0;
  align-items: center;
`
export const CheckLabel = styled.label`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  color: rgba(35, 40, 41, 0.8);
`

export const CheckBoxOff = styled.input`
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  background: #f5f5f7;
  border-radius: 0.4rem;
`

export const CheckBoxOn = styled.input`
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  padding: 0.2rem;
  cursor: pointer;
  appearance: none;
  font-size: 1.3rem;
  text-align: center;
  background: #f5f5f7;
  border-radius: 0.4rem;

  &::after {
    color: #646464;
    content: "\u2713";
  }
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
  padding-left: 1.5rem;
  border-radius: 0.6rem;
  font-family: "Montserrat Alternates";

  &::placeholder {
    color: #a5a7a8;
    font-size: 1.5rem;
    font-family: "Montserrat Alternates";
  }
`

export const ContractorSection = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`

export const Select = styled.select`
  outline: none;
  color: #232829;
  height: 3.4rem;
  cursor: pointer;
  background: #fff;
  appearance: none;
  margin-top: 1.2rem;
  padding-left: 1.5rem;
  border: 1px solid #d9d9d9;
  background-image: "\u2304";
  font-family: "Montserrat Alternates";
`

export const Options = styled.option`
  width: 100%;
  border: none;
  color: #014045;
  appearance: none;
  background: #fff;
  font-size: 1.5rem;
  font-family: "Montserrat Alternates";
  &:hover {
    background: #2fe2f3;
  }
`

export const Register = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Instruction = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: rgba(35, 40, 41, 0.8);
`

// Buttons
export const FormButton = styled.input`
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-size: 1.6rem;
  font-family: "Montserrat Alternates";
  color: ${props => (props.facebook ? "#fff" : "$000")};
  font-weight: ${props => (props.facebook || props.google ? "500" : "600")};
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
  height: 5.2rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  background: #bef3f8;
  transition: all 0.2s;
  margin-bottom: 0.6rem;
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
  margin-bottom: 2rem;
  border: 1px solid #cdcdcd;
  font-family: "Montserrat Alternates";
  &:hover {
    opacity: 0.7;
  }
`

const isFacebookSignInStyles = css`
  margin: 0;
  color: #fff;
  width: 100%;
  border: none;
  height: 5.2rem;
  font-weight: 600;
  font-size: 1.6rem;
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

export const LoginBtn = styled(NavLink)`
  margin: 0;
  padding: 0;
  color: #014045;
  text-align: right;
  font-size: 1.1rem;
  text-decoration: none;
`
