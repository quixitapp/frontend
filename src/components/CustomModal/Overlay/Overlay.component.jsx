import React from "react"

import { OverlayContainer } from "./Overlay.styles"

const Overlay = props => {
  const { history, isOpen, closing, closeModal } = props

  const back = e => {
    e.stopPropagation()
    closeModal()
    history.replace("/home")
  }

  return (
    <OverlayContainer
      className={`animated ${isOpen ? "fadeIn" : " "} ${
        closing ? "fadeOut" : " "
      } faster `}
      show={isOpen ? true : false}
      onClick={back}
    />
  )
}

export default Overlay
