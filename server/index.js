const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('/api/*', (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  // Respond with a 200 status code
  res.sendStatus(200);
});
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