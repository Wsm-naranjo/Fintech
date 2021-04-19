const express = require('express');
const rutas = express.Router();

const {calidad, Mandar}=require("../controllers/producto.controller")

rutas.get("/lista",calidad)
rutas.post("/lista", Mandar)

module.exports=rutas