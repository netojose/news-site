import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import GuestAdvice from './index'

describe('Testing <GuestAdvice /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <GuestAdvice />
      </MemoryRouter>
    )
    expect(wrapper.find('[data-testid="guest-advice"]')).toBeDefined()
  })
})
