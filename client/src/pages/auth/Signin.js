import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { useAuth } from './../../redux/hooks'

const Signin = () => {
    const { loginUser, isAuthenticated } = useAuth()
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    
    const onSubmit = async (e) => {
        e.preventDefault();
        loginUser(email, password);
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    
    return (
        <div className="w-screen h-screen fixed">
            <div className="absolute right-0 h-full w-1/3 bg-white">
                <div className="text-center pt-8 w-full">
                    <Link to="/" className="inline-block"><img src="logo.png" alt="Crowdclip Todo App" /></Link>
                </div>
                <div className="mt-48">
                    <div className="w-4/5 mx-auto">
                        <h1 className="text-5xl font-black tracking-tighter mb-6">Welcome <br /> back</h1>
                        <form onSubmit={onSubmit} noValidate>
                            <div className="mb-4">
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                    placeholder="Your email"
                                    required
                                    className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                    placeholder="Enter a password"
                                    required
                                    className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                            </div>
                            <button className="block w-full py-4 px-4 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all hover:bg-secondary">Sign in</button>
                        </form>
                        <div className="text-xs text-center text-gray-500 mt-8">
                            Don't have an account? <br />
                            <Link to="/signup" className="text-primary font-medium hover:underline hover:text-black">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images/signin.png" alt="" className="w-full h-full object-cover" />
        </div>
    )
}

export default Signin
