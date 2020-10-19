const express = require('express');
const router = express.Router();

const {isLoggedIn}=require("../lib/auth")
const {calidad}=require("../controllers/producto.controller")

router.use(isLoggedIn)
router.get("/lista",isLoggedIn,calidad)
module.exports=router