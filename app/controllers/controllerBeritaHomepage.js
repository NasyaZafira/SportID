const res = require('express/lib/response');
const { berita } = require('../models')

const lihatsemua = async (req, res) => {
    berita.findAll()
      .then(Berita => {
        res.render("homepage" , {berita:Berita});
      })
      .catch(err => {
        console.log(err)
      })
   } 

module.exports = {lihatsemua}