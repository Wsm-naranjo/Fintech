const lista = {}

const pool = require("../database")

lista.mostrar = (req, res) => {
    res.render("productos/lista");
}

lista.Lista = async (req, res) => {
    const lista = await pool.query("SELECT id, Nombre, Cantidades, Precio  FROM lista ")
    res.render("productos/lista", { lista });
}

lista.Eliminar = async (req, res) => {
    const { id } = req.params
    await pool.query("DELETE FROM lista WHERE ID = ?", [id])
    req.flash('success', "Eliminacion correcta")
     res.redirect('/producto/Compra/listaCompleta');
}

module.exports = lista