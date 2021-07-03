const express=require('express')
const router=express.Router()

const {isLoggedIn}=require('../lib/auth')

const {renderPerfil,addDatos,rederList,renderEdit,edit}=require('../Controladores/tienda.controller')

router.use(isLoggedIn);

router.get('/add', renderPerfil)
router.post('/add/:id',addDatos)
router.get('/list/:id',rederList)
router.get('/edit/:id',renderEdit) 
router.post('/edit/:id',edit)

module.exports=router