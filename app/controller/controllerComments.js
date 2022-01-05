const db = require('../models/comments');
const {comments} = require('../models')


const addKomen = async (req, res) => {
    const {Komentar} = req.body;

    const data = await comments.create({
        isi_komen: Komentar
    })
    console.log(data)
    if(!data){
        res.status(400).json({
            message: 'komentar gagal',
            type: 'danger'
        })
        return
    }

    res.status(200).redirect('/')
}

module.exports = {
    addKomen
}


