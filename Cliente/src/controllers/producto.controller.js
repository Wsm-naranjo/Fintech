const productos={}
const pool=require("../database")

productos.calidad=async(req,res)=>{
    const listaProductos = await pool.query("SELECT * FROM producto")
    res.render("productos/productos",{listaProductos})
}

productos.Mandar = async(req, res) =>{
    const{Nombre, Cantidad, Precio} = req.body
    const nuevaLista = {
        Nombre,
        Cantidad,
        Precio
    }
    await pool.query("INSERT INTO lista set ?", [nuevaLista])
}


module.exports=productos