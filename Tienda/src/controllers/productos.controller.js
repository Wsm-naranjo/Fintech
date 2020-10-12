const ProductosCtrl = {};

const pool = require('../database');

ProductosCtrl.renderProductos = async (req, res) => {
    const productos =  await pool.query("SELECT * FROM producto WHERE categoria = ?", [req.user.id] )
    res.render('inicio', { productos });
}

ProductosCtrl.renderEditLink = async (req, res) => {
    const { id } = req.params;
    const Productos = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
    res.render('productos/edit', { producto: Productos[0] });
};

ProductosCtrl.editLink = async (req, res) => {
    const { precioVenta } = req.body;
    const newLink = {
        precioVenta
    };
    await pool.query('UPDATE producto set ?', [newLink]);
    req.flash('success', 'Se Actualizo Correctamente');
    res.redirect('/productos/list');
}

module.exports = ProductosCtrl;