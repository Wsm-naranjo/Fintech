const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {  renderProductos, edit, renderEdit } = require('../Controladores/productos.controlador')


// Authorization
router.use(isLoggedIn);

// Routes
router.get('/lista/:id', isLoggedIn, renderProductos);
router.get('/editar/:id', isLoggedIn, renderEdit);
router.post('/editar/:id', isLoggedIn, edit);

module.exports = router;