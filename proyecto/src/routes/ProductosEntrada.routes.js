const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');


const{
    renderEntrada,addEntrada,renderProductos,EliminarProductos,renderEditarEntrada,EditarEntrada
}=require("../controllers/productoentrada.controller")
router.use(isLoggedIn)

router.get("/add",renderEntrada)
router.post("/add",addEntrada)
router.get("/list",isLoggedIn,renderProductos)
router.get("/delete/:id",EliminarProductos)
router.get("/edit/:id",renderEditarEntrada)
router.post("/edit/:id",EditarEntrada)
module.exports=router