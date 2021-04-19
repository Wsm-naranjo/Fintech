const productos={}
const pool=require("../database")

productos.calidad=async(req,res)=>{
    const listaProductos = await pool.query("SELECT * FROM producto")
    const lista = await pool.query("SELECT * FROM lista")
    res.render("productos/productos",{listaProductos, lista})
}

productos.Mandar = async(req, res) =>{
    const{Nombre, Cantidad, Precio} = req.body
    const nuevaLista = {
        Nombre,
        Cantidad,
        Precio,
        Cliente: req.user.id
    }
    await pool.query('INSERT INTO lista set ?', [nuevaLista])
    req.flash("succes", "Se añadio correctamente")
     res.redirect('/producto/lista');
}

module.exports=productos