import { setToken, getToken, removeToken } from './auth'

describe('Testing setToken, getToken, and removeToken funcitons', () => {
  it('Test set and get token', () => {
    const token = 'test-token'
    setToken(token)
    const storedToken = getToken()
    expect(token).toEqual(storedToken)
    removeToken()
    const newToken = getToken()
    expect(newToken).toBeNull()
  })
})
