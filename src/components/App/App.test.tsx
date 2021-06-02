import React from 'react'
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'

import App from './index'

describe('Testing <App /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    )
    expect(wrapper.find('[data-testid="app"]')).toBeDefined()
  })
})
