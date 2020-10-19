const productos={}
const pool=require("../database")

productos.calidad=async(req,res)=>{
    const listaProductos = await pool.query("SELECT * FROM producto WHERE Tienda=? ",[req.user.id])
    res.render("productos",{listaProductos})
}

module.exports=productos