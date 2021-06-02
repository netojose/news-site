import React, { useContext, useEffect } from 'react'
import { mount } from 'enzyme'

import Providers from './index'
import AppContext from '../../contexts/app'

describe('Testing <Providers /> component', () => {
  it('Check if component render', () => {
    const content = 'Content here'
    const wrapper = mount(
      <Providers>
        <p>{content}</p>
      </Providers>
    )
    expect(wrapper.find('p').text()).toEqual(content)
  })

  it('Updating context data', () => {
    const user = { id: 1, email: 'mail@ok.com', name: 'José' }
    const El1 = () => {
      const { setContextData } = useContext(AppContext)
      useEffect(() => {
        setContextData({ user })
      }, [setContextData])
      return <p>El</p>
    }

    const El2 = () => {
      const { user } = useContext(AppContext)
      return <p>{user?.name}</p>
    }

    const wrapper = mount(
      <Providers>
        <>
          <El1 />
          <El2 />
        </>
      </Providers>
    )

    expect(wrapper.find(Providers)).toBeDefined()

    expect(wrapper.find(El2).find('p').text()).toEqual(user.name)
  })
})
