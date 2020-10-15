const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

const { renderAddProveedor, addProveedor, renderProveedor, deleteProveedor, renderEditProveedor, editProveedor } = require('../controllers/provedor.controller')

router.use(isLoggedIn);

router.get('/add', renderAddProveedor)
router.post('/add', addProveedor)
router.get('/list', isLoggedIn, renderProveedor)
router.get('/delete/:id', deleteProveedor);
router.get('/edit/:id', renderEditProveedor);
router.post('/edit/:id', editProveedor);

module.exports = router;