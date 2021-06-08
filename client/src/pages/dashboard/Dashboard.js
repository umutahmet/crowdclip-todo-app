import React, { useEffect, useState } from 'react'
import { useAuth, useTodo } from '../../redux/hooks'
import TodoForm from '../../components/TodoForm'
import TodoEmptyState from '../../components/TodoEmptyState'
import TodoListing from '../../components/TodoListing'

const initialState = {
    text: '',
    reminderAt: ''
}

const Dashboard = () => {
    const { user } = useAuth()
    const { todos, getTodos, addTodo } = useTodo()
    const [formData, setFormData] = useState(initialState)
    const { text, reminderAt } = formData

    // onload, get all todos
    useEffect(() => {
        getTodos()
    }, [getTodos])

    const handleTodoFormUpdate = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    const handleAddTodo = (e) => {
        e.preventDefault()
        addTodo({ text, reminderAt })
        setFormData(initialState)
    }

    return (
        <div className="container mx-auto mt-48">
            <h1 className="text-5xl mb-6">
                Welcome back, <br />{' '}
                <span className="text-secondary font-black capitalize">{user?.name}!</span>
            </h1>
            <div className="flex">
                <div className="w-2/3 pr-16">
                    {todos.length ? <TodoListing todos={todos} /> : <TodoEmptyState />}
                </div>
                <div className="w-1/3">
                    <TodoForm
                        text={text}
                        reminderAt={reminderAt}
                        onChange={handleTodoFormUpdate}
                        onSubmit={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
