import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Redirect, Route } from 'react-router-dom'
import { setToken } from '../../utils/auth'

import ProtectedRoute from './index'

describe('Testing <ProtectedRoute /> component', () => {
  it('Check if returned a Redirect component when token is missing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProtectedRoute path="/some-route">
          <p>Route content</p>
        </ProtectedRoute>
      </MemoryRouter>
    )

    expect(wrapper.find(Redirect).length).toEqual(1)
  })

  it('Check if returned a Route component when token present', () => {
    setToken('some-token')
    const wrapper = mount(
      <MemoryRouter>
        <ProtectedRoute path="/some-route">
          <p>Route content</p>
        </ProtectedRoute>
      </MemoryRouter>
    )

    expect(wrapper.find(Route).length).toEqual(1)
  })
})
