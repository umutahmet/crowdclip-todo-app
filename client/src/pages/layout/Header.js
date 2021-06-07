import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="container mx-auto">
        <div className="flex items-center justify-between p-6">
            <img src="logo.png" alt="Crowdclip Todo App" />
            <div>
                <Link to="/signin" className="text-sm font-medium hover:underline">Sign in</Link>
                <Link 
                    to="/signup" 
                    className="inline-block py-3 px-5 ml-8 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all hover:bg-secondary">
                    Sign Up — FREE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
