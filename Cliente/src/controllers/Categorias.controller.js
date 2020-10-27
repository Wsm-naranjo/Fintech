const categoriaCtrl = {};
const pool = require('../database');

categoriaCtrl.renderConsumibles = async (req, res) => {
    const consumibles = await pool.query("SELECT * FROM producto WHERE categoria = 'Consumible'");
    res.render('categoria/consumibles', { consumibles })
}

categoriaCtrl.renderNoConsumibles = async (req, res) => {
    const NoConsumibles = await pool.query("SELECT * FROM producto categoria = 'No Consumibles'");
    res.render('categoria/noconsumibles', { NoConsumibles })
}

categoriaCtrl.renderBebidas = async (req, res) => {
    const bebidas = await pool.query("SELECT * FROM producto categoria = 'bebidas'");
    res.render('categoria/bebidas', { bebidas })
}

module.exports = categoriaCtrl;