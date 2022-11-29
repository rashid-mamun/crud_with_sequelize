const express = require('express');
const router = express.Router();
const config = require('../controller/public.controller');
router.get('/', (req, res) => {
  res.status(200).json('Hello');
});

router.post('/register', config.register);
module.exports = router;
