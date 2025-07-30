const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = 'your_super_secret_key'; // move to .env

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Missing username and password or credentials' });
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: 'Email already in use , please use new email' });

  const hashed = await bcrypt.hash(password, 10);
  await new User({ name, email, password: hashed }).save();
  res.status(201).json({ message: 'User created successfully' });
  console.log("User created")
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing fields or credentials' });

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials ,' });
  
  //Implemented jwt in application
  //  const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
  // res.json({ token, name: user.name });
  //   console.log("Login successfully")

  const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, name: user.name });
    console.log("Login successfully")

});

module.exports = router;