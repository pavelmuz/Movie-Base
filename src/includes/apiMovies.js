import axios from 'axios'

const apiKey = '9efe0b4c-51dc-4f25-a5e8-111b841944d1'
const apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'

async function getMovies(title) {
  const config = {
    headers: {
      'X-API-KEY': apiKey
    },
    params: {
      keyword: title
    }
  }
  try {
    const response = await axios.get(apiUrl, config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function getMovie(id) {
  const config = {
    headers: {
      'X-API-KEY': apiKey
    }
  }
  try {
    const response = await axios.get(`${apiUrl}/${id}`, config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default {
  getMovies,
  getMovie
}
