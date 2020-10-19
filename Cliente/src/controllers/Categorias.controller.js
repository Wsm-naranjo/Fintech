const categoriaCtrl = {};
const pool = require('../database');

categoriaCtrl.renderConsumibles = async (req, res) => {
    const consumibles = await pool.query("SELECT * FROM producto INNER JOIN categoria on categoria.id= producto.categoria WHERE categoria.Nombre = 'Consumible'");
    res.render('categoria/consumibles', { consumibles })
}

categoriaCtrl.renderNoConsumibles = async (req, res) => {
    const NoConsumibles = await pool.query("SELECT * FROM producto INNER JOIN categoria on categoria.id= producto.categoria WHERE categoria.Nombre = 'No Consumibles'");
    res.render('categoria/noconsumibles', { NoConsumibles })
}

categoriaCtrl.renderBebidas = async (req, res) => {
    const bebidas = await pool.query("SELECT * FROM producto INNER JOIN categoria on categoria.id= producto.categoria WHERE categoria.Nombre = 'bebidas'");
    res.render('categoria/bebidas', { bebidas })
}

module.exports = categoriaCtrl;