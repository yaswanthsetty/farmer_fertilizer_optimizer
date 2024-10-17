const express = require('express');
const { registerUser, loginUser } = require('../controllers/authcontrollers');
const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', registerUser);

// @route   POST /api/auth/signin
// @desc    Login a user
// @access  Public
router.post('/signin', loginUser);

module.exports = router;