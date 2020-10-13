const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { Listar } = require('../controllers/principal.controller');;

router.use(isLoggedIn);
router.get('/lista', isLoggedIn, Listar);

module.exports = router;