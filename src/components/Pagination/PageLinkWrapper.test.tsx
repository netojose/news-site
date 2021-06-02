import React from 'react'
import { mount } from 'enzyme'

import PageLinkWrapper from './PageLinkWrapper'

describe('Testing <PageLinkWrapper /> component', () => {
  it('Check if component render', () => {
    const content = 'this is the content'
    const wrapper = mount(<PageLinkWrapper>{content}</PageLinkWrapper>)
    const el = wrapper.find('[data-testid="page-link-wrapper"]')
    expect(el).toBeDefined()
    expect(el.text()).toEqual(content)
  })

  it('Skip render when show is false', () => {
    const content = 'this is the content'
    const wrapper = mount(
      <PageLinkWrapper show={false}>{content}</PageLinkWrapper>
    )
    const el = wrapper.find('[data-testid="page-link-wrapper"]')
    expect(el.length).toEqual(0)
  })
})
