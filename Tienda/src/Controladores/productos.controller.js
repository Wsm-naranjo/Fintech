const ProductosCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductosCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const productos = await sql.query("SELECT * FROM productos where tiendaId = ?", [id])
    res.render('inicio', { productos });
}

ProductosCtrl.renderEditLink = async (req, res) => {
    const id = req.params.id;
    const Productos = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
    res.render('productos/edit', { Productos });
};

ProductosCtrl.editLink = async (req, res) => {
    const id = req.params.id;
    const { precioVenta } = req.body;
    const newLink = {
        precioVenta
    };

    await orm.productos.findOne({ where: { id: id } })
        .then(provedor => {
            provedor.update(newLink)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/productos/list/' + id);
        })
}

module.exports = ProductosCtrl;