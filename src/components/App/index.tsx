import React, { useEffect, useContext, useCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppContext from '../../contexts/app'
import Navigation from '../Navigation'
import Routes from '../Routes'
import useApiFetch from '../../hooks/useApiFetch'
import { User } from '../../utils/types'
import { getToken } from '../../utils/auth'

function App(): React.ReactElement {
  const { setContextData } = useContext(AppContext)
  const { call } = useApiFetch<User, null>({
    method: 'get',
    endpoint: 'auth/me',
    onSuccess: useCallback(
      (user) => {
        setContextData({ user })
      },
      [setContextData]
    ),
  })
  useEffect(() => {
    const token = getToken()
    if (token) {
      call()
    }
  }, [call])

  return (
    <Router>
      <div className="flex flex-col h-screen" data-testid="app">
        <Navigation />
        <div className="container px-5 mx-auto flex-grow flex-shrink">
          <Routes />
        </div>
      </div>
    </Router>
  )
}

export default App
