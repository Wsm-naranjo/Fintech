const perfilCtrl = {}

const pool = require('../database');

perfilCtrl.renderPerfil = (req,res) => {
    res.render('perfil');
}

perfilCtrl.addDatos = async (req, res) => {
    const { nombreNegocio, celular, telefono } = req.body
    const newTienda = {
        nombreNegocio,
        celular,
        telefono,
        user_id: req.user.id,
    }
    await pool.query('INSERT INTO Tienda set ?', [newTienda]);
    req.flash('success', 'Se guaardo con exito')
    res.redirect('/perfil/list');
}

perfilCtrl.rederList = async (req, res) => {
    const tienda = await pool.query('SELECT * FROM Tienda WHERE user_id = ?', [req.user.id])
    res.render('perfil/perfilList', { tienda });
}

perfilCtrl.renderEdit = async (req, res) => {
    const { id } = req.params
    const tienda = await pool.query('SELECT * FROM Tienda WHERE id = ?', [id])
    res.render('perfil/editPerfil', { tiendas: tienda[0] });
}

perfilCtrl.edit = async (req, res) => {
    const { id } = req.params
    const { nombreNegocio, celular, telefono } = req.body
    const newTienda = {
        nombreNegocio,
        celular,
        telefono
    }

    await pool.query('UPDATE Tienda set ? WHERE id = ?', [newTienda, id]);
    req.flash('success', "Se guardo correctamente")
    res.redirect("/perfil/list")
}

module.exports=perfilCtrl