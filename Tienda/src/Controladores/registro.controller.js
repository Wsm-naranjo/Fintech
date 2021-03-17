const authCtrl = {};

const passport = require('passport');

authCtrl.renderSignUp = (req, res) => {
    res.render('Usuario/Registro');
};

authCtrl.signUp = passport.authenticate('local.signup', {
    successRedirect: '/perfil/list',
    failureRedirect: '/Registro',
    failureFlash: true
});

authCtrl.renderSignIn = (req, res, next) => {
    res.render('Usuario/Login');
};

authCtrl.signIn = passport.authenticate('local.signin', {
    successRedirect: '/perfil/list',
    failureRedirect: '/Login',
    failureFlash: true
});

authCtrl.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = authCtrl;