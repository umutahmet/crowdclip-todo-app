import React from 'react'

const TodoForm = ({ text, reminderAt, onChange, onSubmit }) => {
    return (
        <section className="mt-16 p-8 bg-grey rounded-xl">
            <h2 className="text-lg font-bold mb-4">Add new task</h2>
            <form onSubmit={onSubmit} noValidate>
                <div className="flex">
                    <div className="w-96 mr-4">
                        <label
                            htmlFor="text"
                            className="inline-block text-gray-600 text-xs uppercase mb-2"
                        >
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
                            className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="w-48 mr-4">
                        <label
                            htmlFor="reminderAt"
                            className="inline-block text-gray-600 text-xs uppercase mb-2"
                        >
                            Set a reminder <span className="text-gray-400 ml-2">(Optional)</span>
                        </label>
                        <input
                            type="date"
                            name="reminderAt"
                            value={reminderAt}
                            onChange={(e) => onChange(e)}
                            className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col-reverse">
                        <button className="inline-block py-4 px-12 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all hover:bg-secondary">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default TodoForm
