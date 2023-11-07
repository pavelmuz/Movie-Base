import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

// Docker backend
// const API_URL = 'http://212.113.117.131:3000/api'

async function getUsers() {
  try {
    const response = await axios.get(`${API_URL}/users/find-all`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

export default {
  getUsers
}
