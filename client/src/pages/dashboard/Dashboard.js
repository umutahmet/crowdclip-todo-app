import React, { useState } from "react"
import { useAuth } from "../../redux/hooks"

const Dashboard = () => {
    const { user } = useAuth()

    const [formData, setFormData] = useState({
      text: '',
      reminder: ''
    })

    const { text, reminder } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    
    return (
        <div className="container mx-auto mt-48">
            <h1 className="text-5xl font-black tracking-tighter mb-6">
                Welcome back, <br /> <span className="capitalize">{user?.name}</span>!
            </h1>
            
            <section className="mt-16 p-8 bg-grey rounded-xl">
                <h2 className="text-lg font-bold mb-4">Add new task</h2>
                <div className="flex">
                    <div className="w-96 mr-4">
                        <label htmlFor="text" className="inline-block text-gray-600 text-xs uppercase mb-2">
                            What's the task?
                        </label>
                        <input 
                            type="text"
                            id="text"
                            name="text"
                            value={text}
                            onChange={(e) => onChange(e)}
                            placeholder="Description" 
                            required
                            className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="w-48 mr-4">
                        <label htmlFor="reminder" className="inline-block text-gray-600 text-xs uppercase mb-2">
                            Set a reminder <span className="text-gray-400 ml-2">(Optional)</span>
                        </label>
                        <input 
                            type="date"
                            name="reminder"
                            value={reminder}
                            onChange={(e) => onChange(e)}
                            placeholder="Due date" 
                            required
                            className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="flex flex-col-reverse">
                        <button
                            className="inline-block py-4 px-12 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all hover:bg-secondary">
                            Add
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center text-center my-16 h-96 bg-grey rounded-xl">
                <div>
                    <h2 className="flex items-center text-3xl font-bold mb-4">
                        <span className="mr-4">No tasks!</span>
                        <img src="icons/popper.png" alt="" className="w-8 h-8 inline-block" />
                    </h2>
                    <p>Start killing that list; <br />add a task above!</p>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
