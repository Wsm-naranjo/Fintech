const bebidasCtrl ={};
const pool = require('..//..//database');
bebidasCtrl.renderBebidas=async (req,res) =>{
    const productos = await pool.query("SELECT * FROM producto INNER JOIN categoria on categoria.id=producto.categoria WHERE categoria.Nombre = 'Bebidas' ");
res.render('bebidas',{productos})
};
module.exports = bebidasCtrl;