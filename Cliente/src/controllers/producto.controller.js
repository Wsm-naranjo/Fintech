const productos={}
const pool=require("../database")

productos.calidad=async(req,res)=>{
    const listaProductos = await pool.query("SELECT * FROM producto")
    res.render("productos/productos",{listaProductos})
}

module.exports=productos