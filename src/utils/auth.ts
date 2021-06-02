const STORAGE_KEY = 'token'

export function setToken(token: string): void {
  window.localStorage.setItem(STORAGE_KEY, token)
}

export function getToken(): string | null {
  return window.localStorage.getItem(STORAGE_KEY)
}

export function removeToken(): void {
  window.localStorage.removeItem(STORAGE_KEY)
}
