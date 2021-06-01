import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AppContext from '../contexts/app'

export default function Logout(): React.ReactElement | null {
  const { setContextData } = useContext(AppContext)
  const history = useHistory()
  useEffect(() => {
    window.localStorage.removeItem('token')
    setContextData({ user: null })
    history.push('/login')
  }, [history, setContextData])
  return null
}
