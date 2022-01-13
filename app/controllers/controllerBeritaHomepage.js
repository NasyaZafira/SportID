const res = require('express/lib/response');
const { berita } = require('../models')

const lihatsemua = async (req, res) => {
  await berita.findAll({
      order: [
          ['createdAt', 'ASC']
        ]
      })
      .then(async (Berita) => {
        const betren = await berita.findAll({
          where : { isTrending : 'True' }
        })
        res.render("homepage" , {berita:Berita,betren});
      })
      .catch(err => {
        console.log(err)
      })
   } 

module.exports = {lihatsemua}