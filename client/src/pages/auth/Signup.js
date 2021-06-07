import React from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div className="w-screen h-screen fixed">
            <div className="absolute right-0 h-full w-1/3 bg-white">
                <div className="text-center pt-8 w-full">
                    <Link to="/" className="inline-block"><img src="logo.png" alt="Crowdclip Todo App" /></Link>
                </div>
                <div className="mt-48">
                    <div className="w-4/5 mx-auto">
                        <h1 className="text-5xl font-black tracking-tighter mb-6">Sign up</h1>
                        <form>
                            <div className="mb-4">
                                <input placeholder="Your first name" className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />    
                            </div>
                            <div className="mb-4">
                                <input placeholder="Your email" className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div className="mb-4">
                                <input placeholder="Enter a password" className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                            </div>
                            <button className="block w-full py-4 px-4 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all hover:bg-secondary">Sign up — Free</button>
                        </form>
                    </div>
                </div>
            </div>
            <img src="images/signup.png" alt="" className="w-full h-full object-cover" />
        </div>
    )
}

export default Signup
