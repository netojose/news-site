import { createContext } from 'react'

import { ContextData } from '../utils/types'

type AppContext = ContextData & {
  setContextData: ({ user }: ContextData) => void
}

export default createContext<AppContext>({
  user: null,
  setContextData: ({ user }: ContextData): void => undefined,
})
