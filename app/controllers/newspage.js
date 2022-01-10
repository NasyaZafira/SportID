const { berita, admin }  = require('../models/index')
const { Sequelize, Op, or } = require('sequelize')
const moment = require('moment')
const marked = require('marked')

//Deklarasi untuk menampilkan halaman upload
const showFormUpload = async (req, res) => {
    const dbAdmin = await admin.findAll()

    res.render('upload', { dbAdmin })
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

//Deklarasi untuk menampilkan halaman newspage serta sinkronasi ke database
const getThumbnailBerita = async (req, res) => {
    const {id} = await req.params

    const Berita = await berita.findOne({
        where: {
            id: id
        },
        raw: true
    })

    //Menampilkan bagian Berita Terkait agar sesuai dengan judul dan kategori
    const dbBerita = await berita.findAll({
        where: {
            [Op.or] : [
                { judulBerita: { 
                    [Op.or] : [ {[Op.like]: '%voli%'}, {[Op.like]: '%bola%'} ]
                    }
                },
                { kategori: { [Op.like]: '%bola%' } }
            ]
        },
        order: [
            ['createdAt', 'DESC']
        ]
    })

    res.render('pages/newspage', { Berita, dbBerita })
}


module.exports = {
    showFormUpload, createBerita, getThumbnailBerita
}