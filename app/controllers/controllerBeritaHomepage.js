const res = require('express/lib/response');
const { berita } = require('../models')

const lihatsemua = async (req, res) => {
  const betren = await berita.findAll({
    where : { isTrending : 'True' },
    order: [ ['updatedAt', 'DESC'] ]
  })

  const dbBerita = await berita.findAll({
    order: [
      ['updatedAt', 'DESC']
    ]
  })

  res.status(200).render("homepage" , {dbBerita, betren, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName});
} 

module.exports = {lihatsemua}