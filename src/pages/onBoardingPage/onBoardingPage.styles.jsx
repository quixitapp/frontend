import styled from "styled-components"

export const OnboardingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0f0f3;
  display: flex;
`

export const OnboardingContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Top = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
`

export const CompleteContainer = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const Title = styled.h3`
  font-family: "Montserrat Alternates";
  font-size: 3rem;
  color: rgb(1, 64, 69);
  margin-bottom: 4rem;
`

export const Form = styled.form`
  width: 20%;
  height: 80%;
`

export const AddressInput = styled.input`
  width: 100%;
  height: 3.4rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  border: none;
  background: #e4e4e4;
  outline: none;
  font-family: "Montserrat Alternates";
  font-size: 1.8rem;
  text-align: center;
  color: #232829;

  &::placeholder {
    color: #232829;
  }
`

export const Submit = styled.input`
  width: 100%;
  height: 3.4rem;
  border-radius: 0.8rem;
  margin: 0;
  background: #bef3f8;
  color: #014045;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Montserrat Alternates";
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #2fe2f3;
  }
`

export const AvatarContainer = styled.div`
  width: 6%;
  height: 20rem;
  padding-top: 4rem;
  padding: 4rem;
`

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  background: #d8d8d8;
  border: none;
  border-radius: 50%;
`

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
`
