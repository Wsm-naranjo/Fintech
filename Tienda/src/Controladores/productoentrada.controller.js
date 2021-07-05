const ProductoEntradaCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductoEntradaCtrl.renderEntrada = (req, res) => {
    res.render("ProductosEntrada/add")
}

ProductoEntradaCtrl.addEntrada = async (req, res) => {
    const id = req.params.id
    const { NombreProducto, codigo, categoria, Descripcion, Cantidad, precioActual, FechaCadusidad, precioVenta } = req.body
    const NuevaEntrada = {
        codigo,
        NombreProducto,
        Cantidad,
        precioActual,
        FechaCadusidad,
        provedoreId: id,
        tiendaId: id
    }
    const NuevaCategoria ={
        categoria,
        Descripcion,
        usuarioId: id
    }
    const productoVenta={
        codigo,
        NombreProducto,
        Cantidad,
        precioVenta,
        FechaCadusidad,
        categoria,
        tiendaId: id
    }
    await orm.entredaProductos.create(NuevaEntrada);
    await orm.categoria.create(NuevaCategoria);
    await orm.productos.create(productoVenta);
    req.flash('success', "Se guardo correctamente")
    res.redirect("/ProductoEntrada/list/" + id)
}

ProductoEntradaCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const DatosProducto = await sql.query("SELECT * FROM productoEntradas WHERE tiendaId = ?", [id])
    res.render("ProductosEntrada/list", { DatosProducto })

}

ProductoEntradaCtrl.EliminarProductos = async (req, res) => {
    const id  = req.params.id;
    await orm.entredaProductos.destroy({ where: { id: id } });
    await orm.productos.destroy({ where: { id: id } });
    await orm.categoria.destroy({ where: { id: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/ProductoEntrada/list/' + id);

}
ProductoEntradaCtrl.renderEditarEntrada = async (req, res) => {
    const id = req.params.id;
    const Productos = await sql.query("SELECT * FROM productoEntradas WHERE id =?", [id])
    res.render("ProductosEntrada/edith", {Productos})
}
ProductoEntradaCtrl.EditarEntrada = async (req, res) => {
    const id = req.params.id
    const { NombreProducto, Cantidad, precioActual, FechaCadusidad } = req.body
    const EntradaEditad = {
        NombreProducto,
        Cantidad,
        precioActual,
        FechaCadusidad
    }

    await orm.entredaProductos.findOne({ where: { id: id } })
        .then(productoEntrada => {
            productoEntrada.update(EntradaEditad)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/ProductoEntrada/list/' + id);
        })
}
module.exports = ProductoEntradaCtrl
