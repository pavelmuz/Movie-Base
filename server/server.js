const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const movieRoutes = require('./routes/movies')
const usersRoutes = require('./routes/users')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: '*'
  })
)

const atlasUser = 'pavelmuz'
const atlasPassword = 'jctDjuHkQ6AT1K8F'

mongoose
  .connect(`mongodb+srv://${atlasUser}:${atlasPassword}@cluster0.psapdlz.mongodb.net/movies-db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/users', usersRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
