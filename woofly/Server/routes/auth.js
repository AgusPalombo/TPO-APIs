const express = require('express');
const router = express.Router();
const { registerUser, registerProvider, loginUser, checkEmailExists } = require('../controllers/authController');


router.post('/register', registerUser);
router.post('/register-provider', registerProvider);
router.post('/login', loginUser);
router.post('/check-email', checkEmailExists);


module.exports = router;
