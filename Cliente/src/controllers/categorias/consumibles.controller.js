const consumiblesCtrl ={};
const pool = require('..//..//database');
consumiblesCtrl.renderConsumibles= async(req,res)=>{
    const producto = await pool.query ("SELECT * FROM producto INNER JOIN categoria on categoria.id= producto.categoria WHERE categoria.Nombre = 'Consumible'");
res.render('consumibles',{producto})
}
module.exports=consumiblesCtrl;