const express = require('express');
const router = express.Router();

const { renderIndex } = require('../Controladores/index.controlador');

router.get('/', renderIndex);

module.exports = router;