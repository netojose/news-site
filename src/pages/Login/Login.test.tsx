import React from 'react'
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'

import Login from './index'

describe('Testing <Login /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <HelmetProvider>
        <Login />
      </HelmetProvider>
    )
    expect(wrapper.find(Login)).toBeDefined()
  })
})
