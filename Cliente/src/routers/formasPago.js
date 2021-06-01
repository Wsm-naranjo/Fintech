const express = require('express');
const rutas = express.Router()

const {traer} = require("../controllers/formaPago.controlador")

const {isLoggedIn} = require("../lib/auth")

rutas.get("/notaVenta", isLoggedIn, traer)

module.exports = rutas