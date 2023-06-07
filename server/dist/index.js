"use strict";

var express = require('express');
var cors = require('cors');
var apiRoutes = require('./routes/api.js');
var app = express();
var mongoose = require('mongoose');
var MONGODB_URI = 'mongodb+srv://juanjosefarina:1mhohjMJNX2GSkdE@cluster0.gxpghrm.mongodb.net/?retryWrites=true&w=majority' || process.env.MONGO_URI;
try {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function () {
    return console.log('Connected to MongoDB');
  })["catch"](function (error) {
    return console.error('MongoDB connection error:', error);
  });
} catch (error) {
  console.log("Couldn't connect to MongoDB");
}
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});