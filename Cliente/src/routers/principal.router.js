const express = require('express');
const router = express.Router();
const {isLoggedIn} =  require('../lib/auth');
const {renderPrincipal} = require('../controllers/principal.controller');;
router.use(isLoggedIn);
router.get('/tienda',renderPrincipal);
module.exports= router;