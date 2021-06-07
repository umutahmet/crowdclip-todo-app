import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./../../redux/hooks"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useAuth()

    // console.log({isAuthenticated, loading})

    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated && !loading ? (
                    <Redirect to="/signin" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    )
}

export default PrivateRoute
