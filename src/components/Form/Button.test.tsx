import React from 'react'
import { mount } from 'enzyme'

import Button from './Button'

describe('Testing <Button /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(<Button text="Button text" />)
    expect(wrapper.find('[data-testid="button"]')).toBeDefined()
  })
})
