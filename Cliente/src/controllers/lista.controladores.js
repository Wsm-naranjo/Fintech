const lista = {}

const pool = require("../database")

lista.mostrar=(req,res)=>{
    res.render("productos/lista");
}

lista.Lista= async(req,res)=>{
    const {id} = req.params
    const lista= await pool.query("SELECT Nombre, cantidad, Precio  FROM lista ")
    res.render("productos/lista", {lista});
}

module.exports = lista