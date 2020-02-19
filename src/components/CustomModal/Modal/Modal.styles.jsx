import styled from "styled-components"

export const ModalBox = styled.div`
  top: 6%;
  width: 52rem;
  padding: 0;
  z-index: 9999;
  padding: 3rem;
  position: fixed;
  background: #ffffff;
  transition: all 0.1s;
  border-radius: 0.8rem;
  animation-duration: 0.8s;
  box-sizing: border-box;
  box-sizing: border-box;
  left: calc((100% - 52rem) / 2);
  box-shadow: rgba(0, 0, 50, 0.15) 0 10px 10px 0;
  height: ${props => (props.resize === true ? "65.8rem" : "58rem")};
`
