import React from 'react'
import { mount } from 'enzyme'

import Loader from './index'

describe('Testing <Loader /> component', () => {
  it('Check if component render', () => {
    const wrapper = mount(<Loader />)
    expect(wrapper.find('[data-testid="loader"]')).toBeDefined()
  })

  it("Don't show element when show is false", () => {
    const wrapper = mount(<Loader show={false} />)
    expect(wrapper.html()).toBeNull()
  })
})
