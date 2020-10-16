const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('..//..//lib/auth');
const {renderBebidas} = require('../../controllers/categorias/bebidas.controller');
router.get('/bebidas',renderBebidas);
module.exports=router;
