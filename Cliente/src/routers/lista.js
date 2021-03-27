const express = require('express');

const  rutas = express.Router()
const{Lista} = require("../controllers/lista.controladores")

rutas.get("/listaCompleta", Lista)


module.exports = rutas