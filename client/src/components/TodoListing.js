import React from 'react'
import { formatDate } from '../helpers/date'

const TodoListing = ({ todos }) => {
    if (!todos) {
        return null
    }

    return (
        <section className="w-3/5 my-16 min-h-96">
            <header className="mb-4 p-4">
                <h2 className="font-bold">
                    You have {todos.length} outstanding task{todos.length > 1 ? 's' : ''}...
                </h2>
                <div className="text-right">
                    <a href="" className="font-bold text-gray-400 text-xs">
                        Delete
                    </a>
                </div>
            </header>
            {todos.map((todo) => (
                <div
                    key={todo._id}
                    className="flex items-center justify-between p-4 mb-2 bg-grey rounded-xl"
                >
                    <div className="flex items-center">
                        <input type="checkbox" name="delete" className="inline-block mr-2" />
                        <div className="text-xs">{todo.text}</div>
                        {todo.reminderAt && (
                            <div className="text-xs">{formatDate(new Date(todo.reminderAt))}</div>
                        )}
                    </div>
                    <div className="ml-2">
                        <a
                            href=""
                            className="font-bold text-primary text-xs hover:underline hover:text-secondary"
                        >
                            Mark as done
                        </a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TodoListing
