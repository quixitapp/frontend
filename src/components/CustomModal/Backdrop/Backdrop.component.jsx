import React from "react"

import { BackdropContainer } from "./Backdrop.styles"

const Backdrop = props => {
  return (
    <BackdropContainer
      className={`animated ${props.isOpen ? "fadeIn" : " "} ${
        props.closing ? "fadeOut" : " "
      } faster `}
      show={props.isOpen ? true : false}
      onClick={() => {
        props.closeModal()
        props.history.replace("/landing")
      }}
    />
  )
}

export default Backdrop
