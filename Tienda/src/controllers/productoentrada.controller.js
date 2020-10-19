const ProductoEntradaCtrl = {};

const pool = require('../database');

ProductoEntradaCtrl.renderEntrada = (req, res) => {
    res.render("ProductosEntrada/add")
}

ProductoEntradaCtrl.addEntrada = async (req, res) => {
    const { NombreProducto, codigo, Nombre, Descripcion	, Cantidad, precio, FechaCadusidad, precioVenta } = req.body
    const NuevaEntrada = {
        codigo,
        NombreProducto,
        Cantidad,
        precio,
        FechaCadusidad,
        proveedor: req.user.id
    }
    const NuevaCategoria ={
        Nombre,
        Descripcion,
        user_id: req.user.id
    }
    const productoVenta={
        codigo,
        NombreProducto,
        Cantidad,
        precioVenta,
        FechaCadusidad,
        categoria: req.user.id,
        Tienda: req.user.id
    }
    await pool.query("INSERT INTO productoentrada set ?", [NuevaEntrada])
    await pool.query("INSERT INTO categoria set ?", [NuevaCategoria])
    await pool.query("INSERT INTO producto set ?", [productoVenta])
    req.flash('success', "Se guardo correctamente")
    res.redirect("/ProductoEntrada/list")
}

ProductoEntradaCtrl.renderProductos = async (req, res) => {
    const DatosProducto = await pool.query("SELECT * FROM productoentrada WHERE proveedor = ?", [req.user.id])
    res.render("ProductosEntrada/list", { DatosProducto })

}

ProductoEntradaCtrl.EliminarProductos = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM productoentrada WHERE ID = ?", [id])
    await pool.query("DELETE FROM producto WHERE ID = ?", [id])
    req.flash('success', "Eliminacion correcta")
    res.redirect("/ProductoEntrada/list")

}
ProductoEntradaCtrl.renderEditarEntrada = async (req, res) => {
    const { id } = req.params;
    const Productos = await pool.query("SELECT * FROM productoentrada WHERE id =?", [id])
    res.render("ProductosEntrada/edith", { ProductoEditado: Productos[0]})
}
ProductoEntradaCtrl.EditarEntrada = async (req, res) => {
    const { id } = req.params;
    const { NombreProducto, Cantidad, precio, FechaCadusidad } = req.body
    const EntradaEditad = {
        NombreProducto,
        Cantidad,
        precio,
        FechaCadusidad
    }
    await pool.query("UPDATE productoentrada set ? WHERE id = ?", [EntradaEditad, id])
    req.flash('success', "Se guardo correctamente")
    res.redirect("/ProductoEntrada/list")
}
module.exports = ProductoEntradaCtrl
