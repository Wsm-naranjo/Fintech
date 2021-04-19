const express = require('express');
const router = express.Router();

const { renderSignUp, signUp, renderSignIn, signIn, logout } = require('../controllers/auth.controller')

// SIGNUP
router.get('/registro', renderSignUp);
router.post('/registro', signUp);

// SINGIN
router.get('/login', renderSignIn);
router.post('/login', signIn);

router.get('/logout', logout);

module.exports = router;