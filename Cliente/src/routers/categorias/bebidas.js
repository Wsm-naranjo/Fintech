const express = require('express');
const router = express.Router();
const {renderBebidas} = require('..//..//controllers/categorias/bebidas.controller');
router.get('/bebidas',renderBebidas);
module.exports=router;
