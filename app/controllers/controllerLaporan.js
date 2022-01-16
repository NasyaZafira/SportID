const db = require('../models/laporan');
const {laporan, berita} = require('../models')

const showBerita = async (req, res) => {
    const {id} = req.session.getBerita

    const dbBerita = await berita.findOne({
        where: {
            id: id
        },
        raw: true
    })
    
    res.status(200).render('pages/report', {
        dbBerita,
        loggedName: req.session.userName, 
        loggedNameAdmin: req.session.adminName
    })
}

const addLaporan = async (req, res) => {
    console.log(req.body);
    const radiobutton = req.body.radiobutton;
    const isipesan = req.body.isipesan;

    const dataLaporan = await laporan.create({
        isilaporan: radiobutton,
        tipelaporan: isipesan
    })
    console.log(dataLaporan)
    if(!dataLaporan){
        res.status(400).json({
            message: 'laporan gagal',
            type: 'danger'
        })
        return
    }
    res.status(200).redirect('/')
}

module.exports = {
    addLaporan, showBerita
}