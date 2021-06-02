import React from 'react'
import { mount } from 'enzyme'

import Alert from './index'

describe('Testing <Alert /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(<Alert message="some message" />)
    expect(wrapper.find('[data-testid="alert-message"]')).toBeDefined()
  })

  it('Check if text is displayed', () => {
    const text = 'some message'
    const wrapper = mount(<Alert message={text} />)
    expect(wrapper.find('[data-testid="alert-message"]').text()).toBe(text)
  })

  it("Don't show element when show is false", () => {
    const wrapper = mount(<Alert message="some message" show={false} />)
    expect(wrapper.html()).toBeNull()
  })
})
