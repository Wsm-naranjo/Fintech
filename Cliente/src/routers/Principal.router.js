const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')
const { rederList } = require('../controllers/Principal.controller');

router.use(isLoggedIn)

router.get('/lista', isLoggedIn, rederList)

module.exports = router