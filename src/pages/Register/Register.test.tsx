import React from 'react'
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'

import Register from './index'

describe('Testing <Register /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <HelmetProvider>
        <Register />
      </HelmetProvider>
    )
    expect(wrapper.find(Register)).toBeDefined()
  })
})
