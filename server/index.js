const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const apiRoutes = require('./routes/api.js');

const mongoose = require('mongoose');

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