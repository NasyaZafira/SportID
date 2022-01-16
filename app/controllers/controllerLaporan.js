const db = require('../models/laporan');
const {laporan} = require('../models')

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
    addLaporan
}