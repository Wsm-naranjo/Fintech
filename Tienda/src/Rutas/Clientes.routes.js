const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {renderAddClientes,addCliete,renderClientes,deleteClientes,renderEditCliente,editCliente}=  require('../Controladores/cliente.controller');

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/add/:id', isLoggedIn, renderAddClientes);
router.post('/add/:id', isLoggedIn, addCliete);
router.get('/list/:id', isLoggedIn, renderClientes);
router.get('/delete/:id', isLoggedIn, deleteClientes);
router.get('/edit/:id', isLoggedIn, renderEditCliente);
router.post('/edit/:id', isLoggedIn, editCliente);

module.exports = router;