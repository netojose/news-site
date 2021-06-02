import { setToken, getToken } from './auth'

describe('Testing setToken and getToken funcitons', () => {
  it('Test set and set token', () => {
    const token = 'test-token'
    setToken(token)
    const storedToken = getToken()
    expect(token).toEqual(storedToken)
  })
})
