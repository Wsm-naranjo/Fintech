const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {  renderProductos, editLink, renderEditLink} = require('../Controladores/productos.controlador')


// Authorization
router.use(isLoggedIn);

// Routes
router.get('/lista/:id', isLoggedIn, renderProductos);
router.get('/editar/:id', isLoggedIn, renderEditLink);
router.post('/editar/:id', isLoggedIn, editLink);

module.exports = router;