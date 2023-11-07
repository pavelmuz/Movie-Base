const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      email,
      password: hashedPassword,
      name
    })

    await newUser.save()

    return res.status(201).json({ message: 'User registered successfully', userId: newUser._id })
  } catch (error) {
    console.error('Error during user registration:', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    return res.status(200).json({ message: 'Login successful', userId: user._id })
  } catch (error) {
    console.error('Error during user login:', error)
    return res.status(500).json({ error: 'Server error' })
  }
})

router.post('/logout', (req, res) => {
  return res.status(200).json({ message: 'Logout successful' })
})

module.exports = router
