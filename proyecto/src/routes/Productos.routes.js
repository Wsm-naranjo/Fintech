const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {  renderProductos, editLink, renderEditLink } = require('../controllers/productos.controller')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/', isLoggedIn, renderProductos);
router.get('/edit/:id', renderEditLink);
router.post('/edit/:id', editLink);

module.exports = router;