const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');


const{ renderEntrada,addEntrada,renderProductos,EliminarProductos,renderEditarEntrada,EditarEntrada }=require("../Controladores/productoentrada.controlador")
router.use(isLoggedIn)

router.get("/agregar/:id", isLoggedIn, renderEntrada)
router.post("/agregar/:id", isLoggedIn, addEntrada)
router.get("/lista/:id",isLoggedIn, renderProductos)
router.get("/Eliminar/:id", isLoggedIn, EliminarProductos)
router.get("/editar/:id", isLoggedIn, renderEditarEntrada)
router.post("/editar/:id", isLoggedIn, EditarEntrada)

module.exports=router