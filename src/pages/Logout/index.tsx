import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AppContext from '../../contexts/app'
import { removeToken } from '../../utils/auth'

export default function Logout(): React.ReactElement | null {
  const { setContextData } = useContext(AppContext)
  const history = useHistory()
  useEffect(() => {
    removeToken()
    setContextData({ user: null })
    history.push('/login')
  }, [history, setContextData])
  return null
}
