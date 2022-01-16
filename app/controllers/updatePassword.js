const {user} = require('../models/index')
const bcryptjs = require('bcryptjs')

const showUpdatePassword = async (req, res) => {
    const {email} = req.session.sendMail
    const User = await user.findOne({
        where: {
            email: email
        },
        raw: true
    })

    res.render('pages/updatePassword', {User, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName, resetUser: req.session.emailUser})
}

const updatePassword = async (req, res) => {
    const {email} = req.session.sendMail
    const {password} = req.body

    const hashPassword = bcryptjs.hashSync(password, 10)

    const data = await user.update({
        password: hashPassword
    }, {
        where: {
            email: email
        }
    })
    req.session.destroy()
    res.status(200).redirect('/login')
}

module.exports = {
    showUpdatePassword, updatePassword
}