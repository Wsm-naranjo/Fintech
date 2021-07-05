const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

const { renderAddProveedor, addProveedor, renderProveedor, deleteProveedor, renderEditProveedor, editProveedor } = require('../Controladores/provedor.controller')

router.use(isLoggedIn);

router.get('/add/:id', isLoggedIn, renderAddProveedor)
router.post('/add/:id', isLoggedIn, addProveedor)
router.get('/list/:id', isLoggedIn, renderProveedor)
router.get('/delete/:id', isLoggedIn, deleteProveedor);
router.get('/edit/:id', isLoggedIn, renderEditProveedor);
router.post('/edit/:id', isLoggedIn, editProveedor);

module.exports = router;