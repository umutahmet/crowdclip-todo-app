import React, { useState } from 'react'
import Todo from './Todo'

const TodoListing = ({ label, todos, onDelete, onToggleComplete }) => {
    const [selectedTodos, setSelectedTodos] = useState([])

    const handleToggleSelected = (id) => () => {
        const todos = !selectedTodos.includes(id)
            ? [...selectedTodos, id]
            : selectedTodos.filter((entry) => entry !== id)

        setSelectedTodos(todos)
    }

    const deleteButtonClasses = selectedTodos.length
        ? 'text-secondary hover:underline hover:text-primary'
        : ''

    if (!todos) {
        return null
    }

    return (
        <section className="my-16 min-h-96">
            <header className="mb-4 p-4">
                <h2 className="font-bold">
                    You have {todos.length} {label} task{todos.length > 1 ? 's' : ''}...
                </h2>
                <div className="text-right">
                    <button
                        disabled={!selectedTodos.length}
                        onClick={() => onDelete(selectedTodos)}
                        className={`font-bold text-gray-400 text-xs transition-all ${deleteButtonClasses}`}
                    >
                        Delete
                    </button>
                </div>
            </header>
            {todos.map((todo) => (
                <Todo
                    key={todo._id}
                    todo={todo}
                    onToggleSelected={handleToggleSelected}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </section>
    )
}

export default TodoListing
