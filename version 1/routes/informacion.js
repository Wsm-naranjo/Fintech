const express = require('express');
const router = express.Router();
const {renderInformacion} = require('../controllers/informacion.controller');
router.get('/informacion',renderInformacion);
module.exports=router;
