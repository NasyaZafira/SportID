const {user} = require('../models/index')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

let token = jwt.sign({email: 'resetPassword', iat: Math.floor(Date.now() / 1000) - 30}, 'resetPassword')

const showForgetPassword = async (req, res) => {
    res.render('pages/forgetPassword', {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName, resetUser: req.session.emailUser})
}

const forgetPassword = async (req, res) => {
    let mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'notreply.sportid@gmail.com',
            pass: 'Sportidnews'
        }
    })

    const dbUser = user.findAll()

    const {email} = req.body

    const data = await user.findOne({
        where: {
            email: email
        }
    })

    req.session.sendMail = data

    if(!data){
        res.status(403).json({
            status: 'Gagal terkirim',
            message: 'Tidak ada Email'
        })
    }

    let mailOptions = {
        from: 'notreply.sportid@gmail.com',
        to: email,
        subject: 'Reset Password - SportID',
        html: `<p>Anda meminta untuk mengatur ulang kata sandi, dan untuk mengatur ulang kata sandi Anda, silakan gunakan link di bawah ini <a href="http://localhost:3000/${token}/update-password">http://localhost:3000/${token}/update-password</a> </p>`
    }

    mail.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })

    res.redirect('/login')
}

module.exports = {
    showForgetPassword, forgetPassword, token
}