const registro = {};

const passport = require('passport');

const ids

registro.mostrarRegistro = (req, res) => {
    const id = req.params.id
    ids = id
    res.render('Usuario/Registro');
};

registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/tienda/agregar/' + ids,
    failureRedirect: '/Registro',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) => {
    res.render('Usuario/Login');
};

registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/tienda/agregar/' + ids,
    failureRedirect: '/Login',
    failureFlash: true
});

registro.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;