const express = require('express');
const rutas = express.Router();

const { mostrarLogin, mostrarRegistro, Registro, Login, cierreSesion } = require('../Controladores/registro.controlador')


rutas.get('/Registro', mostrarRegistro);
rutas.post('/Registro', Registro);


rutas.get('/Login', mostrarLogin);
rutas.post('/Login', Login);

rutas.get('/CerrarSecion', cierreSesion);

module.exports = rutas;