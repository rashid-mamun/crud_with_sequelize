const express = require('express');
const router = express.Router();
const config = require('../controller/public.controller');
router.get('/', (req, res) => {
  res.status(200).json('Hello');
});

router.post('/register', config.register);
router.post('/login', config.login);
module.exports = router;
