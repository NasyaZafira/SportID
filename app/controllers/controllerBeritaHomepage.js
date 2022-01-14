const res = require('express/lib/response');
const { berita } = require('../models')

const lihatsemua = async (req, res) => {
  await berita.findAll({
      order: [
          ['createdAt', 'DESC']
        ]
      })
      .then(async (Berita) => {
        const betren = await berita.findAll({
          where : { isTrending : 'True' }
        })

        const dbBerita = await berita.findAll({
          order: [
            ['createdAt', 'DESC']
          ]
        })

        res.render("homepage" , {berita:dbBerita, betren, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName});
      })
      .catch(err => {
        console.log(err)
      })
   } 

module.exports = {lihatsemua}