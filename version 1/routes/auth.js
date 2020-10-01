const express = require('express');
const router = express.Router();

const { renderSignUp, signUp, renderSignIn, signIn, logout,renderSignupempleado, } = require('../controllers/auth.controller')

// SIGNUP
router.get('/signup', renderSignUp);
router.post('/signup', signUp);

// SINGIN
router.get('/signin', renderSignIn);
router.post('/signin', signIn);
router.get('/logout', logout);
router.get('/signinEmpleado',renderSignupempleado);
router.post('/signinEmpleado', signIn);
module.exports = router;


