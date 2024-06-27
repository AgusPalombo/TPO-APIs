const express = require('express');
const { registerUser, registerProvider, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/register-provider', registerProvider);
router.post('/login', loginUser);

module.exports = router;
