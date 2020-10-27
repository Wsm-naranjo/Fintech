const clienteCtrl = {};

const pool = require('../database');

clienteCtrl.renderAddClientes = (req, res) => {
    res.render('clientes/add');
};

clienteCtrl.addCliete = async (req, res) => {
    const {cedula, nombre, telefono} = req.body;
    const newLink = {
        cedula,
        nombre,
        telefono
    };
    await pool.query('INSERT INTO cliente set ?', [newLink]);
    req.flash('success', 'Se Guardo Correctamente');
    res.redirect('/clientes/list');
}

clienteCtrl.renderClientes = async (req, res) => {
    const clientes = await pool.query('SELECT * FROM cliente ');
    res.render('Clientes/list', {clientes});
}

clienteCtrl.deleteClientes = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM cliente WHERE ID = ?', [id]);
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/clientes/list');
};

clienteCtrl.renderEditCliente = async (req, res) => {
    const { id } = req.params;
    const Productos = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
    res.render('Clientes/edit', {producto: Productos[0]});
};

clienteCtrl.editCliente = async (req,res) => {
    const { id } = req.params;
    const { cedula, nombre, telefono} = req.body; 
    const newLink = {
        cedula,
        nombre, 
        telefono
    };
    await pool.query('UPDATE cliente set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Se Actualizo Correctamente');
    res.redirect('/clientes/list');
}

module.exports = clienteCtrl;