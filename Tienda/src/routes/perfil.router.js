const express=require('express')
const router=express.Router()

const {isLoggedIn}=require('../lib/auth')

const {renderPerfil,addDatos,rederList,renderEdit,edit}=require('../controllers/perfil.controller')

router.use(isLoggedIn);

router.get('/add', renderPerfil)
router.post('/add',addDatos)
router.get('/list',isLoggedIn,rederList)
router.get('/edit/:id',renderEdit) 
router.post('/edit/:id',edit)

module.exports=router