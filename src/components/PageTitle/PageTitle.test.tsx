import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { mount } from 'enzyme'

import PageTitle from './index'

describe('Testing <PageTitle /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <HelmetProvider>
        <PageTitle text="Title" subtitle="Subtitle" />
      </HelmetProvider>
    )
    expect(wrapper.find('[data-testid="pageTitle-title"]')).toBeDefined()
    expect(wrapper.find('[data-testid="pageTitle-subtitle"]')).toBeDefined()
  })

  it('Check if hidding subtitle when subtitle is not passed as argument', () => {
    const wrapper = mount(
      <HelmetProvider>
        <PageTitle text="Title" />
      </HelmetProvider>
    )
    expect(wrapper.find('[data-testid="pageTitle-title"]')).toBeDefined()
    expect(wrapper.find('[data-testid="pageTitle-subtitle"]').length).toEqual(0)
  })
})
