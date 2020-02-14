import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import { auth } from "../../../../configs/firebase"
import { logUser } from "../../../../redux/actions"

const Login = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(({ code, message }) => {
        console.log(code)
        console.log(message)
      })

    auth.currentUser
      .getIdToken(true)
      .then(idToken => {
        localStorage.setItem("idToken", idToken)
        props.logUser(idToken)
      })
      .catch(({ message }) => console.log(message))
  }
  return (
    <>
      <div>
        <h2>Welcome back to Quixit</h2>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <NavLink to="/signup">Need to create an account?</NavLink>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

const mapStateToProps = ({ logUserReducer }) => {
  return {
    user: logUserReducer.user,
  }
}

export default connect(mapStateToProps, { logUser })(Login)
