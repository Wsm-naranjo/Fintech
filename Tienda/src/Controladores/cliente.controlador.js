const clienteCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

clienteCtrl.renderAddClientes = (req, res) => {
    res.render('clientes/agregar');
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
    res.redirect('/clientes/lista/'+ id);
}

clienteCtrl.renderClientes = async (req, res) => {
    const id = req.params.id
    const clientes = await sql.query('SELECT * FROM clientes join comentarios on tiendaId = ?',[id]);
    res.render('Clientes/lista', {clientes});
}

clienteCtrl.deleteClientes = async (req, res) => {
    const id  = req.params.id;
    await orm.cliente.destroy({ where: { id: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/clientes/lista/' + id);
};

clienteCtrl.renderEditCliente = async (req, res) => {
    const id  = req.params.id;
    const Productos = await sql.query('SELECT * FROM clientes WHERE id = ?', [id]);
    res.render('Clientes/editar', { Productos});
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
        res.redirect('/clientes/lista/' + id);
    })
}

module.exports = clienteCtrl;