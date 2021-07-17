const express=require('express')
const router=express.Router()

const {isLoggedIn}=require('../lib/auth')

const {renderPerfil,addDatos,rederList,renderEdit,edit}=require('../Controladores/tienda.controlador')

router.use(isLoggedIn);

router.get('/agregar/:id', isLoggedIn, renderPerfil)
router.post('/agregar/:id', isLoggedIn, addDatos)
router.get('/lista/:id', isLoggedIn, rederList)
router.get('/editar/:id', isLoggedIn, renderEdit) 
router.post('/editar/:id', isLoggedIn, edit)

module.exports=router