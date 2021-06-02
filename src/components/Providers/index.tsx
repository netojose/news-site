import React, { useState, useCallback } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import AppContext from '../../contexts/app'
import { ContextData } from '../../utils/types'

export default function Providers({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement {
  const [contextData, setContextData] = useState<ContextData>({ user: null })
  const setContextDataHandler = useCallback((data) => setContextData(data), [])

  return (
    <HelmetProvider>
      <AppContext.Provider
        value={{ ...contextData, setContextData: setContextDataHandler }}
      >
        {children}
      </AppContext.Provider>
    </HelmetProvider>
  )
}
