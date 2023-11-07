import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

// Docker
// const API_URL = 'http://212.113.117.131:3000/api'

async function registerUser(userData) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData)
    saveUserId(response.data.userId)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

async function loginUser(credentials) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials)
    saveUserId(response.data.userId)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

async function logoutUser() {
  try {
    const response = await axios.post(`${API_URL}/auth/logout`)
    removeUserId()
    window.location.reload()
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

function saveUserId(userId) {
  localStorage.setItem('userId', userId)
}

function removeUserId() {
  localStorage.removeItem('userId')
}

function isLoggedIn() {
  const userId = localStorage.getItem('userId')
  return userId !== null
}

export default {
  registerUser,
  loginUser,
  logoutUser,
  isLoggedIn
}
