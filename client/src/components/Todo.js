import React from 'react'
import { getDueDate } from '../helpers/date'

const Todo = ({ todo, onToggleSelected, onToggleComplete, onEdit }) => {
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
                <button
                    onClick={onToggleComplete(todo._id)}
                    className="font-bold text-primary text-xs hover:underline hover:text-secondary"
                >
                    {todo.completedAt ? 'Mark as outstanding' : 'Mark as done'}
                </button>
                <button
                    onClick={onEdit(todo._id, todo.text, todo.reminderAt)}
                    className="font-bold text-secondary text-xs ml-2 hover:underline hover:text-primary"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default Todo
