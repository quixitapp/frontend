import styled from "styled-components"

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 0;
  padding: 0;
  padding-bottom: 8rem;
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

export const ContactTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #232829;
  margin: 0;
  margin-bottom: 3rem;
  padding-top: ${props => (props.top ? `${props.top}px` : `0px`)};
  text-align: center;
`

export const Split = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 4fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;
`

export const Row = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

export const Field = styled.input`
  width: 100%;
  height: 60px;
  border: 0;
  border-radius: 10px;
  background: #f5f5f7;
  color: #232829;
  font-family: "Montserrat Alternates";
  font-size: 1.6rem;
  padding: 2rem;

  &::placeholder {
    font-family: "Montserrat Alternates";
    color: #232829;
    font-size: 1.6rem;
  }
`

export const Form = styled.form`
  width: 65%;
  margin: 0 auto;
`

export const ButtonWrapper = styled.button`
  width: 100%;
  height: 60px;
  border: 0;
  border-radius: 10px;
  background: #bef3f8;
  color: #014045;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  &:hover {
    background: #2fe2f3;
  }
`

export const Submit = styled.input`
  width: 100%;
  border: 0;
  border-radius: 10px;
  background: none;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Montserrat Alternates";
`
