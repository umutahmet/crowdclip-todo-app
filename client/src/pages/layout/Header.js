import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../redux/hooks"

const Header = () => {
    const { isAuthenticated, logoutUser, user } = useAuth()

    const location = useLocation()
    // hide header on sign up and sign in pages
    if (['/signup', '/signin'].includes(location.pathname)) {
        return null
    }

    const authenticatedClassess = isAuthenticated ? 'px-8 mt-8 shadow-2xl rounded-2xl' : ''

    return (
        <div className="fixed z-10 top-0 w-full">
            <div className="container mx-auto">
                <div className={`flex items-center justify-between p-4 bg-white ${authenticatedClassess}`}>
                    <Link to="/" className="inline-block"><img src="logo.png" alt="Crowdclip Todo App" /></Link>
                    <div>
                        {isAuthenticated && (
                            <>
                                <Link to="/dashboard" className="text-sm font-medium hover:underline">Dashboard</Link>
                                <Link to="/profile" className="text-sm font-medium ml-8 hover:underline"><span className="capitalize">{user?.name}</span></Link>
                                <Link
                                    to="/signin"
                                    onClick={() => logoutUser()}
                                    className="inline-block py-3 px-8 ml-8 bg-secondary text-white text-sm font-medium tracking-wide rounded-full transition-all hover:bg-primary">
                                    Sign out
                                </Link>
                            </>
                        )}
                        {!isAuthenticated && (
                            <>
                                <Link to="/signin" className="text-sm font-medium hover:underline">Sign in</Link>
                                <Link
                                    to="/signup"
                                    className="inline-block py-3 px-5 ml-8 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all hover:bg-secondary">
                                    Sign Up — FREE
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
