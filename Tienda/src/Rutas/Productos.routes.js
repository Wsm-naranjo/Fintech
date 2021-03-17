const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {  renderProductos, editLink, renderEditLink} = require('../Controladores/productos.controller')


// Authorization
router.use(isLoggedIn);

// Routes
router.get('/list', isLoggedIn, renderProductos);
router.get('/edit/:id', renderEditLink);
router.post('/edit/:id', editLink);

module.exports = router;