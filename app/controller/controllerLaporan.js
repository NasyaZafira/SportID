const db = require('../models/comments');
const {laporan} = require('../models')

const addLaporan = async (req, res) => {
    const {Report} = req.body;

    const data = await laporan.create({
        isilaporan: Report
    })
    console.log(data)
    if(!data){
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