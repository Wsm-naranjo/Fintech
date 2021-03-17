const express = require('express');
const router = express.Router();

const { renderIndex } = require('../Controladores/index.conroller');

router.get('/', renderIndex);

module.exports = router;