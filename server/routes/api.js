const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  // Fetch data from the database or an external API
  const data = { message: 'Hello World Nr ' + Math.floor(Math.random() * 10) };
  res.json(data);
});

module.exports = router;