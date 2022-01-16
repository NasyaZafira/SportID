const {user, admin, berita, laporan} = require('../models')
const bcrypt = require('bcryptjs')
const moment = require('moment')

const showAllUser = async (req, res) => {
    try {
        const dbUser = await user.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        res.status(200).render('pages/admin-user', {dbUser: dbUser})
    }
    catch(err) {
        res.status(503).json({
            message: 'Internal server error'
        })
    }
}

const showUpdateAdmin = async (req, res) => {
    const {id} = req.session.loggedAdmin
    const Admin = await admin.findOne({
        where: {
            id: id
        },
        raw: true
    })

    const dbBerita = await berita.findAll()
    const dbLaporan = await laporan.findAll()

    res.render('pages/admin-profil', {Admin, dbBerita, dbLaporan})
}

const updateAdmin = async (req, res) => {
    const {id} = req.session.loggedAdmin
    const {name, email, nomorHp, password, alamat, kecamatan, provinsi, kota, kodepos} = req.body;

    const hashPassword = bcrypt.hashSync(password, 10)

    if(password){
        const data = await admin.update({
            nama: name,
            email: email,
            nomorHp: nomorHp,
            alamat: `${name} ${kecamatan} ${kota} ${provinsi} ${kodepos}`,
            password: hashPassword
        }, {
          where: {
            id: id
          }
        })
        if(!data){
            res.status(400).json({
                message: 'data gagal di update',
                type: 'danger'
            })
            return
        }
    } else {
        const data = await admin.update({
            nama: name,
            email: email,
            nomorHp: nomorHp,
            alamat: `${alamat}, ${kecamatan}, ${kota}, ${provinsi}, ${kodepos}`
        }, {
          where: {
            id: id
          }
        })
        if(!data){
            res.status(400).json({
                message: 'data gagal di update',
                type: 'danger'
            })
            return
        }
    }

    res.status(200).redirect(`/admin`)
}

const showUpdatePasswordUser = async (req, res) => {
    const {id} = await req.params

    const User = await user.findOne({
        where: {
            id: id
        },
        raw: true
    })

    res.render('pages/admin-userUpdate', {User})
}

const updatePasswordUser = async (req, res) => {
    const {id} = req.params
    const {email, password} = req.body

    const wib = ' WIB'
    const isDateTime = moment().locale('id').format('DD MMMM YYYY HH:mm:ss')

    const hashPasswordUser = bcrypt.hashSync(password, 10)

    const data = await user.update({
        email: email,
        password: hashPasswordUser,
        updatedAt: isDateTime + wib
    }, {
        where: {
            id: id
        }
    })
    if(!data){
        res.status(400).json({
            message: 'data gagal di update',
            type: 'danger'
        })
    }

    res.status(200).redirect('/admin/list-user')
}

module.exports = {
    showAllUser, showUpdateAdmin, updateAdmin, showUpdatePasswordUser, updatePasswordUser
}