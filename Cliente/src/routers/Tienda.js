const express = require('express');
const router = express.Router();

const { rederList } = require('../controllers/Tiendas.controller');

router.get('/lista', rederList)

module.exports = router