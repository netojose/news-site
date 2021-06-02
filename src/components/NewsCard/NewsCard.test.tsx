import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import NewsCard from './index'
import Loader from '../Loader'
import { NewsSumaryItem } from '../../utils/types'

const imageSelector = '[data-testid="news-card-image"]'
let data: NewsSumaryItem

describe('Testing <NewsCard /> component', () => {
  beforeEach(() => {
    data = {
      title: 'Some title',
      uri: '/foo/bar',
      excerpt: 'Some excerpt text',
      header: 'this is the header',
      image: 'https://placekitten.com/g/1210/420',
    }
  })

  it('Check if component render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewsCard item={data} />
      </MemoryRouter>
    )

    expect(wrapper.find('[data-testid="news-card-wrapper"]')).toBeDefined()
  })

  it('Check if alt image prop is the news title', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewsCard item={data} />
      </MemoryRouter>
    )

    expect(wrapper.find(imageSelector).prop('alt')).toEqual(data.excerpt)
  })

  it('Check if alt image prop is the news excerpt when title is empty', () => {
    data.excerpt = ''
    const wrapper = mount(
      <MemoryRouter>
        <NewsCard item={data} />
      </MemoryRouter>
    )

    expect(wrapper.find(imageSelector).prop('alt')).toEqual(data.title)
  })

  it('Check if placeholder is displayed when missing image', () => {
    data.image = undefined
    const wrapper = mount(
      <MemoryRouter>
        <NewsCard item={data} />
      </MemoryRouter>
    )

    expect(wrapper.find(imageSelector).prop('src')).toEqual('placeholder.png')
  })

  it('Check change when image is loaded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewsCard item={data} />
      </MemoryRouter>
    )

    expect(wrapper.find(Loader).length).toEqual(1)

    const image = wrapper.find(imageSelector)
    image.simulate('load')

    expect(wrapper.find(Loader).length).toEqual(0)
  })
})
