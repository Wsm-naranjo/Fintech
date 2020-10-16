const express = require('express');
const router = express.Router();
const{renderConsumibles}= require('..//..//controllers/categorias/consumibles.controller');
router.get('/consumibles',renderConsumibles);
module.exports = router;