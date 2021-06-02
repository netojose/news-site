import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import Pagination from './index'

let linkBuilder: (n: number) => string
const itemSelector = '[data-testid="pagination"]'

describe('Testing <Pagination /> component', () => {
  beforeEach(() => {
    linkBuilder = jest.fn((n: number): string => String(n))
  })

  it('Check if component render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Pagination linkBuilder={linkBuilder} page={1} totalPages={92} />
      </MemoryRouter>
    )
    expect(wrapper.find(itemSelector)).toBeDefined()
  })

  it('Skip render when has only one page', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Pagination linkBuilder={linkBuilder} page={1} totalPages={1} />
      </MemoryRouter>
    )
    expect(wrapper.find(itemSelector).length).toEqual(0)
  })

  it('fixing page when page is larger than total pages', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Pagination linkBuilder={linkBuilder} page={8} totalPages={2} />
      </MemoryRouter>
    )

    expect(wrapper.find(itemSelector)).toBeDefined()
  })

  it('ignoring start page fixer when page is lower than total pages', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Pagination linkBuilder={linkBuilder} page={5} totalPages={9} />
      </MemoryRouter>
    )

    expect(wrapper.find(itemSelector)).toBeDefined()
  })
})
