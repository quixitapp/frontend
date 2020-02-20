import styled from "styled-components"

export const FooterContainer = styled.footer`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  color: #232829;
  font-size: 1.4rem;
  padding-top: 5rem;
  text-align: center;
  padding-bottom: 5rem;
  background-color: #f0f0f3;
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
