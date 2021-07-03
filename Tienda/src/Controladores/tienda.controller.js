const perfilCtrl = {}

const pool = require('../database');

perfilCtrl.renderPerfil = (req,res) => {
    res.render('perfil');
}

perfilCtrl.addDatos = async (req, res) => {
    const ids = req.params.id
    const { nombreNegocio, celular, telefono, ruc, direccion } = req.body
    const newTienda = {
        nombreNegocio,
        celular,
        telefono,
        ruc,
        direccion,
        usuarioId:ids
    }
    await pool.tienda.create(newTienda);
    req.flash('success', 'Se guaardo con exito')
    res.redirect('/perfil/list/'+ids);
}

perfilCtrl.rederList = async (req, res) => {
    const ids = req.params.id
    const tiendas = await pool.tienda.findOne({where: {usuarioId: ids}})
    res.render('perfil/perfilList', {tiendas: tiendas});
}

perfilCtrl.renderEdit = async (req, res) => {
    const ids  = req.params.id
    const tienda = await pool.tienda.findOne({where:{id: ids}})
    res.render('perfil/editPerfil', { tienda: tienda });
}

perfilCtrl.edit = async (req, res) => {
    const ids = req.params.id
    const { nombreNegocio, celular, telefono } = req.body
    const newTienda = {
        nombreNegocio,
        celular,
        telefono
    }

    await pool.tienda.findOne({where: {id: ids}})
        .then(tiendas => {
            tiendas.update(newTienda)
        })
    req.flash('success', "Se guardo correctamente")
    res.redirect("/perfil/list/"+ids)
}

module.exports=perfilCtrl