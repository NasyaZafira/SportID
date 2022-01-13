const {berita, admin} = require('../models/index')
const { Sequelize } = require('sequelize')
const moment = require('moment')
const multer = require('multer')


//Deklarasi untuk menampilkan semua data di Berita
const showAllBerita = async (req, res) => {
    try {
        const dbBerita = await berita.findAll({
            order: [
                ['updatedAt', 'DESC']
            ]
        })
        if (dbBerita.length < 1) {
            res.status(404).render('pages/admin/admin', {dbBerita: dbBerita})
        }
        res.status(200).render('pages/admin/admin', {dbBerita: dbBerita})
    } catch (err) {
        res.status(503).send('Internal server error')
    }
}

//Deklarasi untuk menampilkan halaman upload
const showFormUpload = async (req, res) => {
    const dbAdmin = await admin.findAll()

    res.render('pages/admin/createBerita', { dbAdmin })
}

//Deklarasi untuk membuat berita
const createBerita = async (req, res) => {
    const { judul, isi, kategori, author } = await req.body

    //Modifikasi datetime pada createdAt dan updatedAt agar sesuai timezone Indonesia
    const wib = ' WIB'
    const isDateTime = moment().locale('id').format('DD MMMM YYYY HH:mm')

    const dbBerita = await berita.create({
        judulBerita: judul,
        imageBerita: req.file.filename,
        admin_name: author,
        isiBerita: isi,
        kategori: kategori,
        createdAt: isDateTime + wib,
        updatedAt: isDateTime + wib
    })
    if(!dbBerita){
        res.status(400).json({
            message: 'data gagal ditambahkan',
            data: null
        })
    }

    res.status(200).json({
        message: 'Data berhasil ditambahkan',
        data: dbBerita
    })
}

//Deklarasi untuk menampilkan halaman updateBerita
const showUpdateBerita = async (req, res) => {
    const {id} = await req.params

    const Berita = await berita.findOne({
        where: {
            id: id
        },
        raw: true
    })

    const dbAdmin = await admin.findAll()

    res.status(200).render('pages/admin/updateBerita', {Berita, dbAdmin: dbAdmin})

}

//Deklarasi untuk update Berita
const updateBerita = async (req, res) => {
    const {id} = req.params
    const {judul, isi, kategori, author, updatedAt} = req.body
    const selector = {
        where: {
            id: id
        }
    }

    if (!req.file) {
        const data = await berita.update({
            judulBerita: judul,
            isiBerita: isi,
            kategori: kategori,
            admin_name: author,
            isTrending: req.body.trending,
            updatedAt: updatedAt
        }, selector)

        if(!data) {
            res.status(403).send('Data gagal diperbaharui')
            return
        }
    } else {
        const data = await berita.update({
            imageBerita: req.file.filename,
            judulBerita: judul,
            isiBerita: isi,
            kategori: kategori,
            admin_name: author,
            isTrending: req.body.trending,
            updatedAt: updatedAt
        }, selector)

        if(!data) {
            res.status(403).send('Data gagal diperbaharui')
            return
        }
    }

    res.redirect('/admin')
}

//Deklarasi untuk delete Berita
const deleteBerita = async (req, res) => {
    const {id} = req.params
    const Berita = await berita.destroy({
        where: {
            id: id
        },
        raw: true
    })

    if(!Berita){
        res.status(403).send('Data gagal dihapus')
        return
    }

    res.redirect('/admin')
}

module.exports = {
    showAllBerita, showFormUpload, createBerita, showUpdateBerita, updateBerita, deleteBerita
}