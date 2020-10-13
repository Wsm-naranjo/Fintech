const principalController = {};
const pool = require('../database');

principalController.Listar = async (req, res) => {
    const lista = await pool.query('SELECT * FROM tienda WHERE user_id = ?', [req.user.id])
    res.render('pag-principal', { lista });

};
module.exports = principalController;
