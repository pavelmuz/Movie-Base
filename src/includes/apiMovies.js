import axios from 'axios'
require('dotenv').config()

const apiKey = process.env.VUE_APP_KINOPOISK_KEY
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
