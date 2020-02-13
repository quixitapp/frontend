import React, { useState } from "react"
import { auth, provider } from "../../../configs/firebase"
import { NavLink } from "react-router-dom"

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isContractor, setIsContractor] = useState(false)
  const [category, setCategory] = useState("")
  const [zipCode, setZipCode] = useState(0)

  const onSubmit = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(({ message }) => console.log(message))

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        if (!isContractor) {
          const homeowner = {
            ...firebaseUser,
            firstName,
            lastName,
            nickname: `@${firstName[0].toLowerCase()}${lastName.toLowerCase()}`,
          }
          console.log(homeowner)
        } else {
          const contractor = {
            ...firebaseUser,
            firstName,
            nickname: `@${firstName[0].toLowerCase()}${lastName.toLowerCase()}`,
            lastName,
            isContractor,
            category,
            zipCode,
          }
        }
      } else console.log("Not logged in.")
    })
  }

  const googleSingIn = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      console.log(user)
    })
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={e => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          placeholder="FirstName"
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={e => setLastName(e.target.value)}
          type="text"
          name="lastName"
          placeholder="LastName"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <label htmlFor="isContractor">
          <input
            onChange={e => setIsContractor(!isContractor)}
            type="checkbox"
            name="isContractor"
            checked={isContractor}
          />
        </label>
        {isContractor && (
          <>
            <label htmlFor="categories">
              Categories
              <select
                onChange={e => setCategory(e.target.value)}
                name="categories"
                required>
                <option value="Select a category">Select a category</option>
                <option value="Plumbing">Carpenter</option>
                <option value="Plumbing">Plumber</option>
                <option value="Plumbing">Painter</option>
                <option value="Plumbing">Electrician</option>
                <option value="Plumbing">Cleaning</option>
              </select>
            </label>
            <label htmlFor="zip code">Zip Code</label>
            <input
              onChange={e => setZipCode(e.target.value)}
              type="number"
              placeholder="ZipCode"
              required
            />
          </>
        )}
        <input type="submit" value="Sign up" />
        <NavLink to="/login">Already have an account?</NavLink>
        <button onClick={() => googleSingIn()} type="button">
          Continue with Google
        </button>
      </form>
    </>
  )
}

export default Signup
