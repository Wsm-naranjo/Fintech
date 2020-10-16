const express = require('express');
const router = express.Router();
const {renderNoConsumibles} = require('../../controllers/categorias/noConsumibles.controller');
router.get('/noconsumibles',renderNoConsumibles);
module.exports=router;