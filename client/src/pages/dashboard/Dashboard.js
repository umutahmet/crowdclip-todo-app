import React, { useEffect, useState } from "react"
import { useAuth, useTodo } from "../../redux/hooks"
import TodoForm from "../../components/TodoForm"
import TodoEmptyState from "../../components/TodoEmptyState"
import TodoListing from "../../components/TodoListing"

const initialState = {
    text: '',
    reminderAt: ''
} 

const Dashboard = () => {
    const { user } = useAuth()
    const { todos, loading, getTodos, addTodo } = useTodo();
    const [formData, setFormData] = useState(initialState)
    const { text, reminderAt } = formData

    // onload, get all todos
    useEffect(() => {
        getTodos()
    }, [getTodos])
    
    const handleTodoFormUpdate = (e) => setFormData({ 
        ...formData,
        [e.target.name]: e.target.value
    })
    
    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo({ text, reminderAt })
        setFormData(initialState)
    };

    return (
        <div className="container mx-auto mt-48">
            <h1 className="text-5xl font-black tracking-tighter mb-6">
                Welcome back, <br /> <span className="capitalize">{user?.name}</span>!
            </h1>
            <TodoForm 
                text={text}
                reminderAt={reminderAt}
                onChange={handleTodoFormUpdate}
                onSubmit={handleAddTodo} 
            />
            {!todos.length && (<TodoEmptyState />)}
            {todos.length && (<TodoListing todos={todos} />)}
        </div>
    )
}

export default Dashboard
