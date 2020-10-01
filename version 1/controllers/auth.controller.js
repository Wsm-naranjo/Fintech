const authCtrl = {};

const passport = require('passport');

authCtrl.renderSignupempleado = (req, res) => {
    res.render('login_empleado');
};

authCtrl.renderSignUp = (req, res) => {
    res.render('auth/signup');
};

authCtrl.signUp = passport.authenticate('local.signup', {
    successRedirect: '/pag_admin',
    failureRedirect: '/signup',
    failureFlash: true
});

authCtrl.renderSignIn = (req, res, next) => {
    res.render('auth/signin');
};

authCtrl.signIn = passport.authenticate('local.signin', {
    successRedirect: '/pag_admin',
    failureRedirect: '/signin',
    failureFlash: true
});

authCtrl.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = authCtrl;