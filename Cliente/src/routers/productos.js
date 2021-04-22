const express = require('express');
const rutas = express.Router();

const {calidad}=require("../controllers/producto.controller")

rutas.get("/lista/:id",calidad)

module.exports=rutas