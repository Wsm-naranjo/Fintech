const noConsumiblesCtrl ={};
const pool = require('..//..//database');
noConsumiblesCtrl.renderNoConsumibles = async(req,res)=>{
    const producto = await pool.query("SELECT * FROM producto INNER JOIN categoria on categoria.id= producto.categoria  WHERE categoria.Nombre ='No consumible'");
    res.render('noconsumibles',{producto})
};
module.exports = noConsumiblesCtrl;