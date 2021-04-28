const express = require('express');

const  rutas = express.Router()
const{Lista, Eliminar} = require("../controllers/lista.controladores")

rutas.get("/listaCompleta/:id", Lista)
rutas.get("/Eliminar/:id" , Eliminar)


module.exports = rutas