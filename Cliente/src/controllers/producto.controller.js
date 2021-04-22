const productos={}
const pool=require("../database")

productos.calidad=async(req,res)=>{
    const {id} = req.params
    const listaProductos = await pool.query("SELECT * FROM producto WHERE Tienda = ?", [id])
    const lista = await pool.query("SELECT * FROM lista")
    res.render("productos/productos",{listaProductos, lista})
}

module.exports=productos