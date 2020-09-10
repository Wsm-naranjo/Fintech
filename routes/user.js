const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');
const{renderUser}= require('../controllers/user.controller');
router.get('/pag_admin',isLoggedIn,renderUser);
module.exports= router;