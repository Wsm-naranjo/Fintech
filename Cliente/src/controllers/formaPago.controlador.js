const formaPago = {}
const pool = require("../database")


formaPago.traer = async(req,res)=>{
    const datos = await pool.query("SELECT * FROM tienda")
    const cliente = await pool.query("SELECT * FROM cliente")
    const lista = await pool.query("SELECT * FROM lista")
    res.render("formasPago/notaVenta", {datos, cliente, lista});
}

module.exports=formaPago