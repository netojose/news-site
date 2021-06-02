import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import PageLink from './PageLink'

const itemSelector = 'a[data-testid="page-link"]'

describe('Testing <PageLink /> component', () => {
  it('Check if component render', () => {
    const linkBuilder = () => '/foo'
    const wrapper = mount(
      <MemoryRouter>
        <PageLink page={1} linkBuilder={linkBuilder} />
      </MemoryRouter>
    )
    expect(wrapper.find(itemSelector)).toBeDefined()
  })

  it('Check if page number is rendered', () => {
    const linkBuilder = () => '/foo'
    const pageNumber = 4
    const wrapper = mount(
      <MemoryRouter>
        <PageLink page={pageNumber} linkBuilder={linkBuilder} />
      </MemoryRouter>
    )
    expect(wrapper.find(itemSelector).text()).toEqual(String(pageNumber))
  })

  it('Check if custom text is displayed instead of number', () => {
    const linkBuilder = () => '/foo'
    const customText = 'custom text'
    const wrapper = mount(
      <MemoryRouter>
        <PageLink page={3} text={customText} linkBuilder={linkBuilder} />
      </MemoryRouter>
    )
    expect(wrapper.find(itemSelector).text()).toEqual(customText)
  })

  it('Test link builder function', () => {
    const pageNumber = 2
    const linkBuilder = (n: number) => `/some-url?param=${n}`
    const wrapper = mount(
      <MemoryRouter>
        <PageLink page={pageNumber} linkBuilder={linkBuilder} />
      </MemoryRouter>
    )

    expect(wrapper.find(itemSelector).prop('href')).toEqual(
      linkBuilder(pageNumber)
    )
  })
})
