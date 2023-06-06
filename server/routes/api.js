const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const userSchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password for login
userSchema.methods.comparePassword = async function (password) {
  try {
    console.log('nothing seems wrong here');
    console.log('this is the password: ' + password);
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const User = mongoose.model('User', userSchema);

router.use(bodyParser.json());

router.get('/data', (req, res) => {
  // Fetch data from the database or an external API
  const data = { message: 'Hello World Nr ' + Math.floor(Math.random() * 10) };
  res.json(data);
});

router.post('/register', async (req, res) => {
  const { useremail, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ useremail });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Create a new user
    const newUser = new User({ useremail, password });
    await newUser.save();

    // User registration successful
    return res.json({ message: 'User registration successful' });
  } catch (error) {
    // Handle database query or any other error
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Assuming you have set up an Express server
router.post('/login', async (req, res) => {
  const { useremail, password } = req.body;

  try {
    // Query your MongoDB to check if the user exists
    const user = await User.findOne({ useremail });

    if (!user) {
      // User not found
      return res.status(401).json({ message: 'Invalid useremail or password' });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      // Password doesn't match
      return res.status(401).json({ message: 'Invalid useremail or password' });
    }

    // User found and password matches
    return res.json({ message: 'Login successful', user: user.toJSON() });
  } catch (error) {
    // Handle database query or any other error
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;