const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  descr: { type: String, required: false },
  poster: { type: String, required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: false }
})

module.exports = mongoose.model('Movie', movieSchema)
