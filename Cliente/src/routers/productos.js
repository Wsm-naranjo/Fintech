const express = require('express');
const rutas = express.Router();

const {isLoggedIn}=require("../lib/auth")
const {calidad, Mandar}=require("../controllers/producto.controller")

rutas.use(isLoggedIn)
rutas.get("/lista",isLoggedIn,calidad)
rutas.post("/lista", Mandar)
module.exports=rutas