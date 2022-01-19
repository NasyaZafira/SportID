const { berita, admin, comments }  = require('../models/index')
const { Sequelize, Op, or } = require('sequelize')
const moment = require('moment')
const marked = require('marked')

//Deklarasi untuk menampilkan halaman upload
const showFormUpload = async (req, res) => {
    const dbAdmin = await admin.findAll()

    res.render('upload', { dbAdmin })
}

//Deklarasi untuk menampilkan halaman newspage serta sinkronasi ke database
const getThumbnailBerita = async (req, res) => {
    const {id} = await req.params

    const Berita = await berita.findOne({
        where: {
            id: id
        },
        raw: true
    })

    req.session.getBerita = Berita

    //Menampilkan bagian Berita Terkait agar sesuai dengan judul dan kategori
    const dbBerita = await berita.findAll({
        order: [
            ['updatedAt', 'DESC']
        ]
    })
    
        //Menampilkan bagian Berita Terkait agar sesuai dengan judul dan kategori
        const dbKomentar = await comments.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
    
    res.render('pages/newspage', { Berita, dbBerita, dbKomentar, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName })
}




module.exports = {
    getThumbnailBerita
}