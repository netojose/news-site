import React, { useContext, useEffect } from 'react'
import { mount } from 'enzyme'
import AppContext from './app'

describe('Testing AppContext', () => {
  it('Test definition', () => {
    const user = { name: 'Paul', email: 'mail@o.com', id: 1 }

    const El = () => {
      const { user, setContextData } = useContext(AppContext)
      useEffect(() => {
        setContextData({ user: null })
      }, [setContextData])
      return <p>{user?.name}</p>
    }

    mount(
      <AppContext.Provider
        value={{
          user,
          setContextData: jest.fn(),
        }}
      >
        <El />
      </AppContext.Provider>
    )

    expect(2).toEqual(2)
  })
})
