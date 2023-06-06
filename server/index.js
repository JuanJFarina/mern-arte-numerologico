const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const app = express();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_URI || 'mongodb+srv://juanjosefarina:1mhohjMJNX2GSkdE@cluster0.gxpghrm.mongodb.net/?retryWrites=true&w=majority';

try {
  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));
}
catch(error) {
  console.log("Couldn't connect to MongoDB");
}

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});