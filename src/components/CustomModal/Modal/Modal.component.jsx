import React from "react"
import { ModalBox } from "./Modal.styles"

const Modal = props => {
  const [isContractor, setIsContractor] = React.useState(false)
  const contractor = bool => {
    setIsContractor(bool)
  }

  return (
    <>
      <ModalBox
        className="animated zoomIn faster"
        resize={isContractor ? true : false}>
        {React.cloneElement(props.children, {
          contractor,
        })}
      </ModalBox>
    </>
  )
}

export default Modal
