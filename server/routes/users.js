const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/find-all', async (req, res) => {
  try {
    const users = await User.find({})
    return res.status(200).json(users)
  } catch (error) {
    console.error('Error', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
