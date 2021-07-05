const express=require('express')
const router=express.Router()

const {isLoggedIn}=require('../lib/auth')

const {renderPerfil,addDatos,rederList,renderEdit,edit}=require('../Controladores/tienda.controller')

router.use(isLoggedIn);

router.get('/add/', isLoggedIn, renderPerfil)
router.post('/add/:id', isLoggedIn, addDatos)
router.get('/list/:id', isLoggedIn, rederList)
router.get('/edit/:id', isLoggedIn, renderEdit) 
router.post('/edit/:id', isLoggedIn, edit)

module.exports=router