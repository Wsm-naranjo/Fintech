const productoController = {};
const pool = require('../database');

productoController.renderAgregarproducto = (req, res) => {
    res.render('cargar_stock');

}
productoController.Agregarproducto = async (req, res) => {
    const {
        // todos los metodos  de views hbs
        cod_producto,
        nombre_producto,
        p_adquision_producto,
        p_venta_producto,
        cantidad_medida,
        cantidad
    } = req.body;
    const nuevoProducto = {
        cod_producto,
        nombre_producto,
        p_adquision_producto,
        p_venta_producto,
        cantidad_medida,
        cantidad,
        admin:req.user.id
    };await pool.query('INSERT INTO Productos set ?',[nuevoProducto])
    req.flash('SE ha registrado un nuevo producto con exito');
    res.redirect('/stock/detalle');
}
// listar 
productoController.renderProducto = async(req,res)=>{
    const productos =  await pool.query('SELECT * FROM Productos WHERE admin=?',[req.user.id]);
res.render('detalle_stock',{productos});
}
//eliminar 
productoController.eliminarProducto = async(req,res)=>{
   const {id} = req.params;
   await pool.query('DELETE FROM Productos WHERE ID= ?',[id]);
   req.flash ('SE HA ELIMINADO CON EXITO EL PRODUCTO');
   res.redirect('/stock/detalle');
}
//MODIFICAR
productoController.modificarProducto = async(req,res)=>{
    const {id} = req.params;
    const recuperar = await pool.query('SELECT * FROM Productos WHERE id= ?',[id]);
res.render ('editar_stock',{seleccionar:recuperar[0]});
}
productoController.editarProducto = async(req,res)=>{
    const {id} = req.params;
        const {cod_producto,
            nombre_producto,
            p_adquision_producto,
            p_venta_producto,
            cantidad_medida,
            cantidad} = req.body
            const nuevoProducto ={
                cod_producto,
            nombre_producto,
            p_adquision_producto,
            p_venta_producto,
            cantidad_medida,
            cantidad
            } ;
            await pool.query('UPDATE Productos set ? WHERE id = ? ', [nuevoProducto,id]);
            req.flash('SE A DECARGADO PRODUCTO CON EXITO');
            res.redirect('/stock/detalle');
}
module.exports= productoController;