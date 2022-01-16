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

const sessionPassword = (req, res) => {
    const dbUser = user.findAll()

    req.session.emailUser = user.email
}

module.exports = {
    checkLoginUser, checkLoginAdmin, sessionPassword
}