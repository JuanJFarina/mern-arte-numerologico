const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Use bcryptjs instead of bcrypt
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { letrasANumeros, sumar, reducir } = require('./Numerology');// Use Numerology logic
const { crypt, decrypt } = require('./cryptAlgo.js');//crypt and decrypt algorithms

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

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/soloLetras', (req, res) => {
  const { texto, flag } = req.body;
  const numero = reducir(sumar(letrasANumeros(texto, flag)));
  var mensaje = '';
  switch(flag) {
    case 0:
      mensaje = "Numerología de todas las letras";
      break;
    case 1:
      mensaje = "Numerología de solo vocales";
      break;
    case 2:
      mensaje = "Numerología de solo consonantes";
      break;
    default:
      mensaje = "Flag incorrecta, debe ser 0, 1 o 2"
      break;
  }
  const data = {
    message: mensaje,
    number: numero
  };
  res.json(data);
});

router.post('/soloNumeros', (req, res) => {
  const { numeros } = req.body;
  const numero = reducir(sumar(numeros));
  const data = {
    message: 'Numerologia de numeros',
    number: numero
  };
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
      return res.status(401).json({ message: 'La cuenta no existe' });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      // Password doesn't match
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // User found and password matches
    return res.json({ message: 'Login successful', user: user.toObject() });
  } catch (error) {
    // Handle database query or any other error
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Update user name
router.put('/name', async (req, res) => {
  try {
    const { useremail, name } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { useremail: useremail },
      { $set: { name: name } },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update user birthdate
router.put('/birth', async (req, res) => {
  try {
    const { useremail, day, month, year } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { useremail: useremail },
      { day: day, month: month, year: year },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Push a new object into the history array
router.post('/history', async (req, res) => {
  try {
    const { useremail, objectData } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { useremail: useremail },
      { $push: { history: objectData } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/forgotPassword', async (req, res) => {
    const { useremail } = req.body;
    const token = crypt(useremail);

    // Send the password reset email
    const msg = {
      to: useremail,
      from: 'juanjosefarina.jjf@gmail.com',
      subject: 'Reset Contraseña',
      html: `Por favor haz clic en el enlace para setear temporalmente tu contraseña a "accesoTemporal": <a href="https://mern-arte-numerologico-apis.vercel.app/api/resetPassword?token=${token}">Reset Contraseña</a>`
    };

    sgMail.send(msg);

    res.json({'message':'Everything OK', 'email': msg});
});

router.get('/resetPassword', async (req, res) => {
  const token = req.query.token; // Retrieve the token from query parameters instead of req.body

  const email = decrypt(token);

  console.log(email);

  try {
    const user = await User.findOne({ useremail: email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.password = 'accesoTemporal'; // Set the new password

    await user.save(); // The 'pre('save')' middleware will hash the password before saving

    console.log(user);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;