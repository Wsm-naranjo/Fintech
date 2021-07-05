const proveedorCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

proveedorCtrl.renderAddProveedor = (req, res) => {
    res.render('proveedor/add');
};

proveedorCtrl.addProveedor = async (req, res) => {
    const id = req.params.id
    const { NombreProveedor, Direccion, Numero, Estado } = req.body;
    const newLink = {
        NombreProveedor,
        Direccion,
        Numero,
        Estado,
        usuarioId: id
    };
    await orm.provedor.create(newLink)
        .then(() => {
            req.flash('success', 'Se Guardo Correctamente');
            res.redirect('/proveedor/list/' + id);
        })
}
proveedorCtrl.renderProveedor = async (req, res) => {
    const id = req.params.id
    const proveedores  = await sql.query('SELECT * FROM provedores  WHERE usuarioId = ?', [id])
    res.render('proveedor/list', {proveedores })
}

proveedorCtrl.deleteProveedor = async (req, res) => {
    const id = req.params.id;
    await orm.provedor.destroy({ where: { id: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/proveedor/list/' + id);
};

proveedorCtrl.renderEditProveedor = async (req, res) => {
    const id = req.params.id;
    const proveedores = await sql.query('SELECT * FROM provedores  WHERE id = ?', [id])
    res.render('proveedor/edit', {proveedores})
};

proveedorCtrl.editProveedor = async (req, res) => {
    const id = req.params.id;
    const { NombreProveedor, Direccion, Numero, Estado } = req.body;
    const newLink = {
        NombreProveedor,
        Direccion,
        Numero,
        Estado,
    };
    await orm.provedor.findOne({ where: { id: id } })
        .then(provedor => {
            provedor.update(newLink)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/proveedor/list/' + id);
        })
}
module.exports = proveedorCtrl