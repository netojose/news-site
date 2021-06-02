import React from 'react'
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import Article from './index'

describe('Testing <Article /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <HelmetProvider>
          <Article />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find(Article)).toBeDefined()
  })
})
