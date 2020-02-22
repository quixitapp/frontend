import styled from "styled-components"

export const OverlayContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  position: fixed;
  transition: all 0.2s;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => (props.show ? "block" : "none")};
`
