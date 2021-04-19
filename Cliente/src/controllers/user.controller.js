const userCtrl = {};

userCtrl.renderUserProfile = (req, res, next) => {
  res.render('pag-principal');
}

module.exports = userCtrl;