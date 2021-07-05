const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');


const{ renderEntrada,addEntrada,renderProductos,EliminarProductos,renderEditarEntrada,EditarEntrada }=require("../Controladores/productoentrada.controlador")
router.use(isLoggedIn)

router.get("/add/:id", isLoggedIn, renderEntrada)
router.post("/add/:id", isLoggedIn, addEntrada)
router.get("/list/:id",isLoggedIn, renderProductos)
router.get("/delete/:id", isLoggedIn, EliminarProductos)
router.get("/edit/:id", isLoggedIn, renderEditarEntrada)
router.post("/edit/:id", isLoggedIn, EditarEntrada)

module.exports=router