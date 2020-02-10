import React, { useEffect } from "react"
import loading from "./loading.svg"
import { connect } from "react-redux"
import { getToken } from "../../redux/actions"

import { Theme, CallbackContainer } from "./Callback.styles"

const Callback = props => {
  useEffect(() => {
    const token = localStorage.getItem("token")
    const newToken = `Bearer ${token}`
    props.getToken(newToken)
  }, [props])

  return (
    <Theme>
      <CallbackContainer>
        <img src={loading} alt="loading" />
      </CallbackContainer>
    </Theme>
  )
}

const mapStateToProps = ({ tokenReducer }, props) => {
  return {
    user: tokenReducer.token,
  }
}

export default connect(mapStateToProps, { getToken })(Callback)
