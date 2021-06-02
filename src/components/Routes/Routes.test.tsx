import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { mount } from 'enzyme'

import Routes from './index'

describe('Testing <Routes /> component', () => {
  it('Check if renders a single route', () => {
    const wrapper = mount(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(wrapper.find(Route).length).toEqual(1)
  })
})
