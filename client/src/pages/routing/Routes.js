import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from '../auth/Signup'
import Signin from '../auth/Signin'
import Dashboard from './../dashboard/Dashboard'
import PrivateRoute from '../routing/PrivateRoute'
import NotFound from './../NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
