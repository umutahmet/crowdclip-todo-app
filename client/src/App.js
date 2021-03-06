import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import { loadUser } from './redux/actions/auth'
import setAuthToken from './helpers/setAuthToken'
import Header from './pages/layout/Header'
import Homepage from './pages/Homepage'
import Routes from './pages/routing/Routes'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

function App() {
    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <>
                    <Header />
                    <ToastContainer newestOnTop autoClose={4000} />

                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route component={Routes} />
                    </Switch>
                </>
            </Router>
        </Provider>
    )
}

export default App
