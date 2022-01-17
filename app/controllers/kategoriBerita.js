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
    const angkatBesiNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Besi%'}, {[Op.like]: '%besi%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const angkatBesiTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%besi%'}, {[Op.like]: '%Besi%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-angkatbesi", { 
        berita: angkatBesiNoTrend, beritaTrend: angkatBesiTrend, 
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName});
}

const basket = async (req, res) => {
    const basketNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%basket%'}, {[Op.like]: '%Basket%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const basketTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%basket%'}, {[Op.like]: '%Basket%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-basket", { 
        berita: basketNoTrend, beritaTrend: basketTrend, 
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const belaDiri = async (req, res) => {
    const belaDiriNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%bela%'}, {[Op.like]: '%Bela%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const belaDiriTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%bela%'}, {[Op.like]: '%Bela%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-beladiri", { 
        berita: belaDiriNoTrend, beritaTrend: belaDiriTrend,
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const buluTangkis = async (req, res) => {
    const buluTangkisNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%tangkis%'}, {[Op.like]: '%Tangkis%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const buluTangkisTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Tangkis%'}, {[Op.like]: '%tangkis%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-bulutangkis", { 
        Bulutangkis: buluTangkisNoTrend, beritaTrend: buluTangkisTrend,
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const otomotif = async (req, res) => {
    const otomotifNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%otomotif%'}, {[Op.like]: '%Otomotif%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const otomotifTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Otomotif%'}, {[Op.like]: '%otomotif%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-otomotif", { 
        berita: otomotifNoTrend, beritaTrend: otomotifTrend,
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const panahan = async (req, res) => {
    const panahNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Panah%'}, {[Op.like]: '%panah%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const panahTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%panah%'}, {[Op.like]: '%Panah%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-panahan", { 
        berita: panahNoTrend, beritaTrend: panahTrend, 
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const renang = async (req, res) => {
    const renangNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%renang%'}, {[Op.like]: '%Renang%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const renangTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Renang%'}, {[Op.like]: '%renang%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })
    
    res.status(200).render("pages/kategori-renang", { 
        berita: renangNoTrend, beritaTrend: renangTrend, 
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const sepakBola = async (req, res) => {
    const sepakBolaNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%sepak%'}, {[Op.like]: '%Sepak%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const sepakBolaTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Sepak%'}, {[Op.like]: '%sepak%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-sepakbola", { 
        Berita: sepakBolaNoTrend, beritaTrend: sepakBolaTrend, 
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}

const voli = async (req, res) => {
    const voliNoTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%Voli%'}, {[Op.like]: '%voli%'} ]
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    const voliTrend = await berita.findAll({
        where: {
            kategori: { 
                [Op.or] : [ {[Op.like]: '%voli%'}, {[Op.like]: '%Voli%'} ]
            },
            isTrending: true
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })

    res.status(200).render("pages/kategori-voli", { 
        berita: voliNoTrend, beritaTrend: voliTrend, 
        loggedName: req.session.userName, loggedNameAdmin: req.session.adminName });
}


module.exports = { angkatBesi, basket, belaDiri, buluTangkis, otomotif, panahan, renang, sepakBola, voli }