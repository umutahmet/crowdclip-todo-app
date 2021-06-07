import React from "react"
import { Link, Redirect } from "react-router-dom"
import { useAuth } from "../redux/hooks"

const Homepage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex items-center justify-center text-center pt-48 pb-16">
        <div>
          <h1 className="text-7xl font-black tracking-tighter mb-6">Crowdclip <br /> Todo App</h1>
          <h2 className="text-xl">The only todo app you'll <br /> ever need.</h2>
        </div>
      </div>
      <div className="container mx-auto">
        <img src="images/product-shot.png" alt="" className="mx-auto" />
      </div>
    </div>
  )
}

export default Homepage
