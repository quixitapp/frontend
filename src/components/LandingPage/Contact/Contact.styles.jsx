import styled from "styled-components"

export const ContactContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  padding-bottom: 8rem;
  background-color: #fff;
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

export const ContactTitle = styled.h2`
  margin: 0;
  color: #232829;
  font-weight: 600;
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 3rem;
  padding-top: ${props => (props.top ? `${props.top}px` : `0px`)};
`

export const Split = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: 4fr 4fr;
`

export const Row = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

export const Field = styled.input`
  border: 0;
  width: 100%;
  height: 60px;
  padding: 2rem;
  color: #232829;
  font-size: 1.6rem;
  border-radius: 10px;
  background: #f5f5f7;
  font-family: "Montserrat Alternates";

  &::placeholder {
    color: #232829;
    font-size: 1.6rem;
    font-family: "Montserrat Alternates";
  }
`

export const Form = styled.form`
  width: 65%;
  margin: 0 auto;
`

export const ButtonWrapper = styled.button`
  border: 0;
  width: 100%;
  height: 60px;
  outline: none;
  color: #014045;
  cursor: pointer;
  border-radius: 10px;
  background: #bef3f8;
  transition: all 0.2s;
  &:hover {
    background: #2fe2f3;
  }
`

export const Submit = styled.input`
  border: 0;
  width: 100%;
  font-weight: 600;
  background: none;
  font-size: 1.6rem;
  border-radius: 10px;
  font-family: "Montserrat Alternates";
`
