const express = require('express');
const router = express.Router();

const { renderLogin } = require('../controllers/login.controller');

router.get('/', renderLogin);

module.exports = router;