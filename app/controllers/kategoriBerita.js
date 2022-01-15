const res = require('express/lib/response')
const { Op } = require("sequelize");
const { berita } = require('../models')



// const katBerita = async (req, res) => {
//     console.log(req.params.kategori)
//     berita.findAll({
//         where : { kategori: req.params.kategori }
//     })
// }

// const sepakBola = async (req, res) => {
//     berita.findAll({
//          where: { kategori: 'sepakbola' }
//     })
//         .then(Berita => {
//             res.render("pages/kategori-sepakbola", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// module.exports = {
//     sepakBola
// }





const angkatBesi = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'angkat besi' }, { kategori: 'Angkat Besi' }, { kategori: 'angkatBesi' }]
    })
        .then(Berita => {
            res.render("pages/kategori-angkatbesi", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName});
        })
        .catch(err => {
            console.log(err)
        })
}

const basket = async (req, res) => {
    berita.findAll({
        [Op.or]: [ { kategori: { [Op.like]: '%basket%' }}, { kategori: 'Bola Basket' }, { kategori: 'bolaBasket' }, { kategori: 'basket' }, { kategori: 'Basket' }]
        // [Op.or] : [ {[Op.like]: '%basket%'}, {[Op.like]: '%bola%'} ]
    })
        .then(Berita => {
            res.render("pages/kategori-basket", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const belaDiri = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'beladiri' }, { kategori: 'Beladiri' }]
    })
        .then(Berita => {
            res.render("pages/kategori-beladiri", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const buluTangkis = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'buluTangkis' }, { kategori: 'Bulu Tangkis' }, { kategori: 'bulu tangkis' }]
    })
        .then(Berita => {
            res.render("pages/kategori-bulutangkis", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const otomotif = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'otomotif' }, { kategori: 'Otomotif' }]
    })
        .then(Berita => {
            res.render("pages/kategori-otomotif", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const panahan = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'panahan' }, { kategori: 'Panahan' }]
    })
        .then(Berita => {
            res.render("pages/kategori-panahan", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const renang = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'renang' }, { kategori: 'Renang' }]
    })
        .then(Berita => {
            res.render("pages/kategori-renang", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const sepakBola = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'sepakbola' }, { kategori: 'SepakBola' }, { kategori: 'sepakBola' }, { kategori: 'Sepak Bola' }, { kategori: 'sepak bola' }]
    })
        .then(Berita => {
            res.render("pages/kategori-sepakbola", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}

const voli = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'voli' }, { kategori: 'Bola Voli' }, { kategori: 'bola voli' }, { kategori: 'bolaVoli' }, { kategori: 'bola Voli' }]
        // [Op.or] : [ {[Op.like]: '%voli%'}, {[Op.like]: '%bola%'} ]
    })
        .then(Berita => {
            res.render("pages/kategori-voli", { berita: Berita, loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports = { angkatBesi, basket, belaDiri, buluTangkis, otomotif, panahan, renang, sepakBola, voli }