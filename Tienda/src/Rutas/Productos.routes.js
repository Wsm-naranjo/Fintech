const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {  renderProductos, editLink, renderEditLink} = require('../Controladores/productos.controller')


// Authorization
router.use(isLoggedIn);

// Routes
router.get('/list/:id', isLoggedIn, renderProductos);
router.get('/edit/:id', isLoggedIn, renderEditLink);
router.post('/edit/:id', isLoggedIn, editLink);

module.exports = router;