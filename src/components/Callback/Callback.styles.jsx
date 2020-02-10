import styled from "styled-components"

export const Theme = styled.div`
  position: "absolute";
  display: "flex";
  justifycontent: "center";
  height: "100vh";
  width: "100vw";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const CallbackContainer = styled.div`
  width: 960px;
  max-width: 960px;
  margin: 5rem auto;
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
