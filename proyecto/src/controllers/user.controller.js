const userCtrl = {};

userCtrl.renderUserProfile = (req, res, next) => {
  res.render('perfil');
}

module.exports = userCtrl;