const res = require('express/lib/response');
const { berita } = require('../models')
const moment = require('moment')



const createBerita = async (req, res) => {
  const wib = ' WIB'
  const isDateTime = moment().locale('id').format('DD MMMM YYYY h:mm')

  berita.create({
      judulBerita:req.body.judulBerita,
      isiBerita:req.body.isiBerita,
      kategori: req.body.kategori,
      createdAt: isDateTime + wib,
      updatedAt: isDateTime + wib
  })
    res.render("uploadberita")
}


const lihatsemua = async (req, res) => {
    berita.findAll()
      .then(Berita => {
        res.render("homepage" , {berita:Berita});
      })
      .catch(err => {
        console.log(err)
      })
   } 

module.exports = {lihatsemua , createBerita}