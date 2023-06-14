const express = require('express');
const cors = require('cors');
const app = express();
// Configure CORS options to allow all origins
const corsOptions = {
  origin: 'https://mern-arte-numerologico.vercel.app', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Accept'], // Specify the allowed request headers
};
app.use(cors(corsOptions));
const apiRoutes = require('./routes/api.js');

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://vercel-admin-user:nBXBL5H34RrmHSEk@cluster0.gxpghrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || process.env.MONGODB_URI;

try {
  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));
}
catch(error) {
  console.log("Couldn't connect to MongoDB");
}

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});