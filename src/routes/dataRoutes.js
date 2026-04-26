const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, protected data` });
});

module.exports = router;