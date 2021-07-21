const express = require('express');
const app = require('../app');
const rutas = express.Router()

const {lista} = require('../Controladores/entradaSalida.controlador')
const {isLoggedIn} = require('../lib/auth')

rutas.use(isLoggedIn)

rutas.get('/agregar/:id', isLoggedIn, lista)

module.exports = rutas