const ProductoEntradaCtrl = {};

const pool = require('../database');

ProductoEntradaCtrl.renderEntrada=(req,res)=> {
    res.render("ProductosEntrada/add")
}

ProductoEntradaCtrl.addEntrada=async(req,res)=> {
    const {NombreProducto,Tipo,Cantidad,precio,FechaCadusidad}=req.body
    const NuevaEntrada={
        NombreProducto,
        Tipo,
        Cantidad,
        precio,
        FechaCadusidad,
        user_id:req.user.id,
    }
    await pool.query("INSERT INTO productoentrada set ?",[NuevaEntrada])
    req.flash("Se guardo correctamente")
    res.redirect("/ProductoEntrada/list")
}
ProductoEntradaCtrl.renderProductos=async(req,res)=>{
    const DatosProducto=await pool.query("SELECT * FROM productoentrada WHERE user_id = ?",[req.user.id])
    res.render("ProductosEntrada/list",{DatosProducto})

}

ProductoEntradaCtrl.EliminarProductos=async(req,res)=>{
    const {id}=req.params;
    await pool.query("DELETE FROM productoentrada WHERE ID = ?",[id])
    req.flash("Eliminacion correcta")
    res.redirect("/ProductoEntrada/list")

}
ProductoEntradaCtrl.renderEditarEntrada=async(req,res)=>{
    const {id}=req.params;
    const Productos=await pool.query("SELECT * FROM productoentrada WHERE id =?",[id])
    res.render("ProductosEntrada/edith",{ProductoEditado:Productos[0]})
}
ProductoEntradaCtrl.EditarEntrada=async(req,res)=>{
    const {id}=req.params;
    const {NombreProducto,Tipo,Cantidad,precio,FechaCadusidad}=req.body
    const EntradaEditad={
        NombreProducto,
        Tipo,
        Cantidad,
        precio,
        FechaCadusidad
    }
    await pool.query("UPDATE productoentrada set ?",[EntradaEditad,id])
    req.flash("Se guardo correctamente")
    res.redirect("/ProductoEntrada/list")
}
module.exports=ProductoEntradaCtrl
