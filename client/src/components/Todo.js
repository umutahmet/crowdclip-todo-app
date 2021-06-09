import React from 'react'
import { getDueDate } from '../helpers/date'

const Todo = ({ todo, onToggleSelected }) => {
    return (
        <div className="flex items-center justify-between p-4 mb-2 bg-grey rounded-xl">
            <label htmlFor={`delete-${todo._id}`} className="flex items-center">
                <input
                    type="checkbox"
                    id={`delete-${todo._id}`}
                    name="delete"
                    className="inline-block mr-2"
                    onClick={onToggleSelected(todo._id)}
                />
                <div className="text-xs">{todo.text}</div>
                {todo.reminderAt && (
                    <div className="text-xs font-bold ml-2">
                        — Due {getDueDate(todo.reminderAt)}
                    </div>
                )}
            </label>
            <div className="ml-2">
                <button className="font-bold text-primary text-xs hover:underline hover:text-secondary">
                    Mark as done
                </button>
            </div>
        </div>
    )
}

export default Todo
