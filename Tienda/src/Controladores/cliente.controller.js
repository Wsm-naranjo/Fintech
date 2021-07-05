const clienteCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

clienteCtrl.renderAddClientes = (req, res) => {
    res.render('clientes/add');
};

clienteCtrl.addCliete = async (req, res) => {
    const id = req.params.id;
    const {username, Nombres, Telefono} = req.body;
    const nuevocliente = {
        Nombres,
        username,
        Telefono
    };
    await orm.cliente.create(nuevocliente);
    req.flash('success', 'Se Guardo Correctamente');
    res.redirect('/clientes/list/'+ id);
}

clienteCtrl.renderClientes = async (req, res) => {
    const id = req.params.id
    const clientes = await pool.query('SELECT * FROM cliente join comentarios on tiendaId = ?',[id]);
    res.render('Clientes/list', {clientes});
}

clienteCtrl.deleteClientes = async (req, res) => {
    const id  = req.params.id;
    await pool.query('DELETE FROM cliente WHERE ID = ?', [id]);
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/clientes/list/' + id);
};

clienteCtrl.renderEditCliente = async (req, res) => {
    const id  = req.params.id;
    const Productos = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
    res.render('Clientes/edit', { Productos});
};

clienteCtrl.editCliente = async (req,res) => {
    const id  = req.params.id;
    const { username, Nombres, Telefono} = req.body; 
    const actulizarCliente = {
        username,
        Nombres, 
        Telefono
    };
    await orm.cliente.findOne({ where: { id: id } })
    .then(clientes => {
        clientes.update(actulizarCliente)
        req.flash('success', 'Se Actualizo Correctamente');
        res.redirect('/clientes/list/' + id);
    })
}

module.exports = clienteCtrl;