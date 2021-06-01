import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import ProtectedRoute from './ProtectedRoute'
import Navigation from './Navigation'

const Home = loadable(() => import('../pages/Home'))
const CategoryList = loadable(() => import('../pages/CategoryList'))
const Article = loadable(() => import('../pages/Article'))
const Register = loadable(() => import('../pages/Register'))
const Login = loadable(() => import('../pages/Login'))
const Logout = loadable(() => import('../pages/Logout'))

export default function Routes(): React.ReactElement {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navigation />
        <div className="container px-5 mx-auto flex-grow flex-shrink">
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
        </div>
      </div>
    </Router>
  )
}
