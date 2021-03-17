const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { renderUserProfile } = require('../Controladores/user.controller');

router.get('/perfil', isLoggedIn, renderUserProfile);

module.exports = router;