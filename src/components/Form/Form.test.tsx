import React from 'react'
import { mount } from 'enzyme'

import Form from './Form'

describe('Testing <Form /> component', () => {
  it('Check if component render', () => {
    const submitFn = jest.fn()
    const wrapper = mount(
      <Form onSubmit={submitFn}>
        <p>Form content</p>
      </Form>
    )
    expect(wrapper.find('p')).toBeDefined()
  })
})
