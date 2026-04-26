const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const limiter = require('../middleware/rateLimiter');

router.post('/register', limiter, authController.register);
router.post('/login', limiter, authController.login);

module.exports = router;