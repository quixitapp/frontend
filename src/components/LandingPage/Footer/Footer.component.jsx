import React from "react"

import { FooterContainer, Container } from "./Footer.styles"

const Footer = () => (
  <FooterContainer>
    <Container>{`Quixit, ${new Date().getFullYear()} All rights reserved.`}</Container>
  </FooterContainer>
)

export default Footer
