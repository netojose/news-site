import React, { useEffect, useContext, useCallback } from 'react'

import AppContext from './contexts/app'
import Routes from './components/Routes'
import useApiFetch from './hooks/useApiFetch'
import { User } from './utils/types'
import { getToken } from './utils/auth'

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

  return <Routes />
}

export default App
