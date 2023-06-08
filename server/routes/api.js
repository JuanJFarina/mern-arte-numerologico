const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Use bcryptjs instead of bcrypt
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
  name: {type: String},
  day: {type: Number},
  month: {type: Number},
  year: {type: Number},
  history: {type: [Object]}
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

    // Create a new user with name, day, month, and year fields
    const newUser = new User({ useremail, password, name: "", day: null, month: null, year: null });
    await newUser.save();

    // User registration successful
    return res.json({ message: 'Registro correcto !' });
  } catch (error) {
    // Handle database query or any other error
    console.error('Error de registro:', error);
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
      return res.status(401).json({ message: 'Email o contraseña erróneos' });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      // Password doesn't match
      return res.status(401).json({ message: 'Email o contraseña erróneos' });
    }

    // User found and password matches
    return res.json({ message: 'Login successful', user: user.toJSON() });
  } catch (error) {
    // Handle database query or any other error
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Update user name
// Update user name
router.put('/name', async (req, res) => {
  try {
    const { useremail, name } = req.body;
    let user = await User.findOne({ useremail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name; // Update the name field
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update user birthdate
router.put('/birth', async (req, res) => {
  try {
    const { useremail, day, month, year } = req.body;
    let user = await User.findOne({ useremail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.day = day; // Update the day field
    user.month = month; // Update the month field
    user.year = year; // Update the year field
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Push a new object into the history array
router.post('/history', async (req, res) => {
  try {
    const { useremail, objectData } = req.body;
    const user = await User.findOne({ useremail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.history.push(objectData);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;