import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  background-color: #f0f0f3;
  color: #232829;
  margin: 0;
  padding: 0;
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-size: 1.4rem;
  text-align: center;
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
