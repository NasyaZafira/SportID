const {user, admin} = require('../models')


function register(req, res) {
  if (req.body.kodeunik == 'akumaujadiadmin') {
    console.log(req.body)
    admin.register(req.body)
    .then(admin => {
      res.redirect("/login")
    })
    .catch(err => {
      res.redirect('/register')
    })
  } else {
  user.register(req.body)
    .then(user => {
      res.redirect("/login")
    })
    .catch(err => console.log(err))} 
  }
  module.exports = {register}