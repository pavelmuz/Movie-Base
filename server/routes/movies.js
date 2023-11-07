const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

router.post('/add', async (req, res) => {
  try {
    const { name, descr, poster, userId, rating } = req.body

    const newMovie = new Movie({
      name,
      descr,
      poster,
      userId,
      rating
    })

    await newMovie.save()
    console.log('movie added')

    return res.status(201).json({ message: 'movie added to DB' })
  } catch (error) {
    console.error('Error', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

router.get('/find-all', async (req, res) => {
  try {
    const { fieldName, fieldValue } = req.query

    const movies = await Movie.find({ [fieldName]: fieldValue })
    return res.status(200).json(movies)
  } catch (error) {
    console.error('Error', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedMovie = await Movie.findByIdAndRemove(id)

    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    return res.status(200).json({ message: 'Movie deleted from DB' })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { rating } = req.body

    const updatedMovie = await Movie.findByIdAndUpdate(id, { rating }, { new: true })

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    return res.status(200).json(updatedMovie)
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
