const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');
const {renderAgregarproducto,
    Agregarproducto,
    renderProducto,
    eliminarProducto,
    modificarProducto,
    editarProducto} = require ('../controllers/producto.controller');
router.use(isLoggedIn);
router.get('/cargar',renderAgregarproducto);
router.post('/cargar',Agregarproducto);
router.get('/detalle',isLoggedIn,renderProducto);
router.get('/eliminar/:id',eliminarProducto);
router.get('/editar/:id',modificarProducto);
router.post('/editar/:id',editarProducto);
module.exports = router;