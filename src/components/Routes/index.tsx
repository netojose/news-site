import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import ProtectedRoute from '../ProtectedRoute'

const Home = loadable(() => import('../../pages/Home'))
const CategoryList = loadable(() => import('../../pages/CategoryList'))
const Article = loadable(() => import('../../pages/Article'))
const Register = loadable(() => import('../../pages/Register'))
const Login = loadable(() => import('../../pages/Login'))
const Logout = loadable(() => import('../../pages/Logout'))

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <ProtectedRoute path="/article/:slug([0-9a-z-/]+)">
        <Article />
      </ProtectedRoute>
      <ProtectedRoute path="/category/:slug">
        <CategoryList />
      </ProtectedRoute>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute path="/logout">
        <Logout />
      </ProtectedRoute>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
