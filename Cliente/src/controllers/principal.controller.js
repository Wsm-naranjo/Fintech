const principalController = {};

const pool = require('../database');

principalController.rederList = async (req, res) => {
    const lista = await pool.query('SELECT * FROM Tienda WHERE user_id = ?', [req.user.id])
    res.render('pag-principal', { lista });
}

module.exports = principalController;
