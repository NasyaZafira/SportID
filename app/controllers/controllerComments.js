const db = require('../models/comments');
const {comments, berita} = require('../models')



const addKomen = async (req, res) => {
    const {Komentar, id_berita} = req.body;

    const data = await comments.create({
        isi_komen: Komentar,
        user_name: req.session.userName
    })
    if(!data){
        res.status(400).json({
            message: 'komentar gagal',
            type: 'danger'
        })
        return
    }

    const {id} = req.session.getBerita

    const dbBerita = await berita.findOne({
        where: {
            id: id
        },
        raw: true
    })
    
    res.status(200).redirect(`/details/${id}`)
}

module.exports = {
    addKomen
}


