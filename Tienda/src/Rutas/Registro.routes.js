const express = require('express');
const router = express.Router();

const { renderSignUp, signUp, renderSignIn, signIn, logout } = require('../Controladores/registro.controller')

// SIGNUP
router.get('/Registro', renderSignUp);
router.post('/Registro', signUp);

// SINGIN
router.get('/Login', renderSignIn);
router.post('/Login', signIn);

router.get('/CerrarSecion', logout);

module.exports = router;