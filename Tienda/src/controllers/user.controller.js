const userCtrl = {};

userCtrl.renderUserProfile = (req, res, next) => {
  res.render('perfil/perfilList');
}

module.exports = userCtrl;