import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Logout from './index'
import { setToken, getToken } from '../../utils/auth'

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe('Testing <Logout /> component', () => {
  it('Check if component render', () => {
    const token = 'some-token'
    setToken(token)
    expect(getToken()).toEqual(token)
    mount(
      <MemoryRouter initialEntries={['/home']}>
        <Logout />
      </MemoryRouter>
    )
    expect(getToken()).toBeNull()
    expect(mockHistoryPush).toHaveBeenCalledWith('/login')
  })
})
