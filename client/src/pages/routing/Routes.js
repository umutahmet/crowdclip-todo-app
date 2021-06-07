import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from '../auth/Signup'
import Login from '../auth/Login'
import Dashboard from './../dashboard/Dashboard'
import PrivateRoute from '../routing/PrivateRoute'
import NotFound from './../NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
