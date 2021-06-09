import React, { useEffect, useState } from 'react'
import { useAuth, useTodo } from '../../redux/hooks'
import TodoForm from '../../components/TodoForm'
import TodoEmptyState from '../../components/TodoEmptyState'
import TodoListing from '../../components/TodoListing'

const initialState = {
    id: '',
    text: '',
    reminderAt: ''
}

const Dashboard = () => {
    const { user } = useAuth()
    const { todos, getTodos, addTodo, deleteTodos, toggleCompleteTodo, updateTodo } = useTodo()
    const [formData, setFormData] = useState(initialState)
    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const { id, text, reminderAt } = formData

    // onload, get all todos
    useEffect(() => {
        getTodos()
    }, [getTodos])

    // update incomplete/complete list when todos are updated
    useEffect(() => {
        setIncompleteTodos(todos.filter((todo) => !todo.completedAt))
        setCompleteTodos(todos.filter((todo) => todo.completedAt))
    }, [todos])

    const handleTodoFormUpdate = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEditing) {
            updateTodo({ text, reminderAt }, id)
        } else {
            addTodo({ text, reminderAt })
        }
        setFormData(initialState)
    }

    const handleEditTodo = (id, text, reminderAt) => (e) => {
        e.preventDefault()
        setIsEditing(true)
        setFormData({ id, text, reminderAt: reminderAt || '' })
    }

    const handleDeleteTodos = (ids) => {
        deleteTodos({ ids })
    }

    const handleToggleCompleteTodo = (id) => () => {
        toggleCompleteTodo(id)
    }

    return (
        <div className="container mx-auto mt-48">
            <h1 className="text-5xl mb-6 px-4">
                Welcome back, <br />{' '}
                <span className="text-secondary font-black capitalize">{user?.name}!</span>
            </h1>
            <div className="flex">
                <div className="w-2/3 pr-16">
                    {!incompleteTodos.length && <TodoEmptyState />}
                    {incompleteTodos.length > 0 && (
                        <TodoListing
                            label="outstanding"
                            todos={incompleteTodos}
                            onDelete={handleDeleteTodos}
                            onEdit={handleEditTodo}
                            onToggleComplete={handleToggleCompleteTodo}
                        />
                    )}
                    {completeTodos.length > 0 && (
                        <TodoListing
                            label="complete"
                            todos={completeTodos}
                            onDelete={handleDeleteTodos}
                            onEdit={handleEditTodo}
                            onToggleComplete={handleToggleCompleteTodo}
                        />
                    )}
                </div>
                <div className="w-1/3">
                    <TodoForm
                        text={text}
                        reminderAt={reminderAt}
                        onChange={handleTodoFormUpdate}
                        onSubmit={handleSubmit}
                        isEditing={isEditing}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
