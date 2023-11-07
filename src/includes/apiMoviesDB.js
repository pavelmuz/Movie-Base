import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

// Docker backend
// const API_URL = 'http://212.113.117.131:3000/api'

async function addMovie(movieData) {
  try {
    const response = await axios.post(`${API_URL}/movies/add`, movieData)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

async function findMovies(fieldName, fieldValue) {
  try {
    const response = await axios.get(`${API_URL}/movies/find-all`, {
      params: {
        fieldName,
        fieldValue
      }
    })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

async function deleteMovie(movieId) {
  try {
    const response = await axios.delete(`${API_URL}/movies/delete/${movieId}`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

async function updateRating(movieId, rating) {
  try {
    const response = await axios.put(`${API_URL}/movies/update/${movieId}`, { rating })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

export default {
  addMovie,
  findMovies,
  deleteMovie,
  updateRating
}
