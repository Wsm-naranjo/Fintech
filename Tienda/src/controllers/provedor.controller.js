const proveedorCtrl = {};

const pool = require('../database');

proveedorCtrl.renderAddProveedor = (req, res) => {
    res.render('proveedor/add');
};

proveedorCtrl.addProveedor = async (req, res) => {
    const {NombreProveedor,Direccion,Numero,Estado} = req.body;
    const newLink = {
        NombreProveedor,
        Direccion,
        Numero,
        Estado,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO proveedor set ?', [newLink]);
    req.flash('success', 'Se Guardo Correctamente');
    res.redirect('/proveedor/list');
}
proveedorCtrl.renderProveedor = async (req, res) => {
    const proveedores = await pool.query('SELECT * FROM proveedor WHERE user_id = ?', [req.user.id]);
    res.render('proveedor/list', {proveedores});
}

proveedorCtrl.deleteProveedor = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM proveedor WHERE ID = ?', [id]);
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/proveedor/list');
};

proveedorCtrl.renderEditProveedor = async (req, res) => {
    const { id } = req.params;
    const Proveedor = await pool.query('SELECT * FROM proveedor WHERE id = ?', [id]);
    res.render('Proveedor/edit', {proveedores: Proveedor[0]});
};

proveedorCtrl.editProveedor = async (req,res) => {
    const { id } = req.params;
    const { NombreProveedor,Direccion,Numero,Estado} = req.body; 
    const newLink = {
        NombreProveedor,
        Direccion,
        Numero,
        Estado,
    };
    await pool.query('UPDATE proveedor set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Se Actualizo Correctamente');
    res.redirect('/proveedor/list');
}
module.exports=proveedorCtrl