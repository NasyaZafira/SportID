const { berita, admin, comments }  = require('../models/index')
const { Sequelize, Op, or } = require('sequelize')


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
    
        //Menampilkan bagian Berita Terkait agar sesuai dengan judul dan kategori
        const dbKomentar = await comments.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
    

    res.render('pages/newspage', { Berita, dbBerita, dbKomentar })
}




module.exports = {
    getThumbnailBerita
}