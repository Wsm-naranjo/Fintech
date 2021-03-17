const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {renderAddClientes,addCliete,renderClientes,deleteClientes,renderEditCliente,editCliente}=  require('../Controladores/cliente.controller');

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/add', renderAddClientes);
router.post('/add', addCliete);
router.get('/list', isLoggedIn, renderClientes);
router.get('/delete/:id', deleteClientes);
router.get('/edit/:id', renderEditCliente);
router.post('/edit/:id', editCliente);

module.exports = router;