import React from 'react'
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import CategoryList from './index'

describe('Testing <CategoryList /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <HelmetProvider>
          <CategoryList />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find(CategoryList)).toBeDefined()
  })
})
