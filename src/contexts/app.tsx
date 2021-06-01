import { createContext } from 'react'

import { User, ContextData } from '../utils/types'

export default createContext<{
  user: User | null
  setContextData: ({ user }: ContextData) => void
}>({
  user: null,
  setContextData: ({ user }: ContextData): void => undefined,
})
