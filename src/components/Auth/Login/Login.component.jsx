import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { auth } from "../../../configs/firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const user = await auth.signInWithEmailAndPassword(email, password)
      console.log(user)
    } catch ({ message }) {
      console.log(message)
    }
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

export default Login
