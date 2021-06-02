import React from 'react'
import { mount } from 'enzyme'

import Input from './Input'

describe('Testing <Form /> component', () => {
  it('Check if component render', () => {
    const registerFn = jest.fn()
    const wrapper = mount(
      <Input label="Input label" name="name" register={registerFn} />
    )
    expect(wrapper.find('[data-testid="input-label"]').text()).toEqual(
      'Input label:'
    )
  })

  it('Check component attributes', () => {
    const registerFn = jest.fn()
    const wrapper = mount(
      <Input
        label="Input label"
        name="name"
        required
        placeholder="some placeholder"
        autoComplete="username"
        autoFocus
        register={registerFn}
      />
    )
    const input = wrapper.find('[data-testid="input"]')
    expect(input.prop('placeholder')).toEqual('some placeholder')
    expect(input.prop('autoComplete')).toEqual('username')
    expect(input.prop('required')).toBeTruthy()
    expect(input.prop('autoFocus')).toBeTruthy()
  })

  it('Rendering an error', () => {
    const errors = { name: 'Error message' }
    const registerFn = jest.fn()
    const wrapper = mount(
      <Input
        label="Input label"
        name="name"
        register={registerFn}
        errors={errors}
      />
    )
    expect(wrapper.find('[data-testid="input-error"]').text()).toEqual(
      errors.name
    )
  })
})
