// src/stores/auth.js
export const Auth = {
  login(username, password) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true')
      return true
    }
    return false
  },
  logout() {
    localStorage.removeItem('auth')
  },
  isAuthenticated() {
    return localStorage.getItem('auth') === 'true'
  }
}
