const perfilCtrl = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')


perfilCtrl.renderPerfil = (req, res) => {
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
        usuarioId: ids
    }
    await orm.tienda.create(newTienda)
        .then(() => {
            req.flash('success', 'Se guaardo con exito')
            res.redirect('/perfil/list/' + ids);
        })
}

perfilCtrl.rederList = async (req, res) => {
    const id = req.params.id
    const tiendas = await sql.query("SELECT * FROM tiendas WHERE usuarioId = ?", [id])
    res.render('perfil/perfilList', { tiendas })
}

perfilCtrl.renderEdit = async (req, res) => {
    const id = req.params.id
    const tienda = await sql.query("SELECT * FROM tiendas WHERE id = ?", [id])
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

    await orm.tienda.findOne({ where: { id: ids } })
        .then(tiendas => {
            tiendas.update(newTienda)
            req.flash('success', "Se guardo correctamente")
            res.redirect("/perfil/list/" + ids)
        })
}

module.exports = perfilCtrl