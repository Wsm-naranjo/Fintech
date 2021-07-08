const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

const { renderAddProveedor, addProveedor, renderProveedor, deleteProveedor, renderEditProveedor, editProveedor } = require('../Controladores/provedor.controlador')

router.use(isLoggedIn);

router.get('/agregar/:id', isLoggedIn, renderAddProveedor)
router.post('/agregar/:id', isLoggedIn, addProveedor)
router.get('/lista/:id', isLoggedIn, renderProveedor)
router.get('/Eliminar/:id', isLoggedIn, deleteProveedor);
router.get('/editar/:id', isLoggedIn, renderEditProveedor);
router.post('/editar/:id', isLoggedIn, editProveedor);

module.exports = router;