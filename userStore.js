const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests, try again later"
});