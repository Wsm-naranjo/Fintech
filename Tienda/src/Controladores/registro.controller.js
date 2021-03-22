const registro = {};

const passport = require('passport');

registro.mostrarRegistro = (req, res) => {
    res.render('Usuario/Registro');
};

registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/perfil/list',
    failureRedirect: '/Registro',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) => {
    res.render('Usuario/Login');
};

registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/perfil/list',
    failureRedirect: '/Login',
    failureFlash: true
});

registro.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;