const {user} = require('../models/index')

const checkLoginUser = (req, res, next) => {
    if (req.session.loggedUser){
        next()
    } else {
        res.redirect('/login')
    }
}

const checkLoginAdmin = (req, res, next) => {
    if (req.session.loggedAdmin) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = {
    checkLoginUser, checkLoginAdmin
}