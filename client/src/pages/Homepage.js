import React from "react"
import { Link, Redirect } from "react-router-dom"
import { useAuth } from "../redux/hooks"

const Homepage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div>
      <h1>Crowdclip Todo App</h1>
      <p>Create and manage todos.</p>
      <div>
        <Link to="/signup">
          Sign Up
        </Link>
        <Link to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Homepage
