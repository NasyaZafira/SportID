const {user} = require('../models')

function register(req, res) {
    user.register(req.body)
    .then(user => {
      res.redirect("/login")
    })
    .catch(err => console.log(err))
  }

  module.exports = {register}