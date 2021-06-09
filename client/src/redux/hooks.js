import { useCallback } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { loadUser, register, login, logout } from './actions/auth'
import {
    getTodos,
    addTodo,
    deleteTodos,
    updateTodo,
    getTodo,
    toggleCompleteTodo
} from './actions/todo'

export function useAuth() {
    const dispatch = useDispatch()
    const { token, isAuthenticated, loading, user } = useSelector(
        (state) => ({
            token: state.auth.token,
            isAuthenticated: state.auth.isAuthenticated,
            loading: state.auth.loading,
            user: state.auth.user
        }),
        shallowEqual
    )

    const boundLoadUser = useCallback(
        (...args) => {
            return dispatch(loadUser(...args))
        },
        [dispatch]
    )

    const boundRegisterUser = useCallback(
        (...args) => {
            return dispatch(register(...args))
        },
        [dispatch]
    )

    const boundLoginUser = useCallback(
        (...args) => {
            return dispatch(login(...args))
        },
        [dispatch]
    )
    const boundLogoutUser = useCallback(
        (...args) => {
            return dispatch(logout(...args))
        },
        [dispatch]
    )

    return {
        token,
        isAuthenticated,
        loading,
        user,
        loadUser: boundLoadUser,
        registerUser: boundRegisterUser,
        loginUser: boundLoginUser,
        logoutUser: boundLogoutUser
    }
}

export function useTodo() {
    const dispatch = useDispatch()
    const { todos, todo, loading, error } = useSelector(
        (state) => ({
            todos: state.todo.todos,
            todo: state.todo.todo,
            loading: state.todo.loading,
            error: state.todo.error
        }),
        shallowEqual
    )

    const boundGetTodos = useCallback(
        (...args) => {
            return dispatch(getTodos(...args))
        },
        [dispatch]
    )

    const boundAddTodo = useCallback(
        (...args) => {
            return dispatch(addTodo(...args))
        },
        [dispatch]
    )

    const boundDeleteTodos = useCallback(
        (...args) => {
            return dispatch(deleteTodos(...args))
        },
        [dispatch]
    )

    const boundUpdateTodo = useCallback(
        (...args) => {
            return dispatch(updateTodo(...args))
        },
        [dispatch]
    )

    const boundGetTodo = useCallback(
        (...args) => {
            return dispatch(getTodo(...args))
        },
        [dispatch]
    )

    const boundToggleCompleteTodo = useCallback(
        (...args) => {
            return dispatch(toggleCompleteTodo(...args))
        },
        [dispatch]
    )

    return {
        todos,
        todo,
        loading,
        error,
        getTodos: boundGetTodos,
        getTodo: boundGetTodo,
        addTodo: boundAddTodo,
        deleteTodos: boundDeleteTodos,
        updateTodo: boundUpdateTodo,
        toggleCompleteTodo: boundToggleCompleteTodo
    }
}
