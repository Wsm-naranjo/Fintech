const linksCtrl = {};

const pool = require('../database');

linksCtrl.renderAddLink = (req, res) => {
    res.render('productos/add');
};

linksCtrl.addLink = async (req, res) => {
    const {codigo, nombre, cantidad, unidad, precio} = req.body;
    const newLink = {
        codigo,
        nombre,
        cantidad,
        unidad,
        precio,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO producto set ?', [newLink]);
    req.flash('success', 'Se Guardo Correctamente');
    res.redirect('/productos');
}

linksCtrl.renderProductos = async (req, res) => {
    const productos = await pool.query('SELECT * FROM producto WHERE user_id = ?', [req.user.id]);
    res.render('inicio', {productos});
}

linksCtrl.deleteLink = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM producto WHERE ID = ?', [id]);
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/productos');
};

linksCtrl.renderEditLink = async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
    console.log(links);
    res.render('productos/edit', {link: links[0]});
};

linksCtrl.editLink = async (req,res) => {
    const { id } = req.params;
    const { codigo, nombre, cantidad, unidad, precio} = req.body; 
    const newLink = {
        codigo,
        nombre,
        cantidad,
        unidad,
        precio,
    };
    await pool.query('UPDATE producto set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Se Actualizo Correctamente');
    res.redirect('/productos');
}

module.exports = linksCtrl;