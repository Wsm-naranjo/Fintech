const express = require('express');

const  rutas = express.Router()
const{Lista, Eliminar} = require("../controllers/lista.controladores")

rutas.get("/listaCompleta", Lista)
rutas.get("/Eliminar/:id" , Eliminar)


module.exports = rutas