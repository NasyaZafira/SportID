const { berita } = require('../models')
const { Op } = require("sequelize");

const angkatBesi = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'angkat besi' }, { kategori: 'Angkat Besi' }, { kategori: 'angkatBesi' }]
    })
        .then(Berita => {
            res.render("pages/kategori-angkatbesi", { berita: Berita });
        })
        .catch(err => {
            console.log(err)
        })
}

const basket = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'bola basket' }, { kategori: 'Bola Basket' }, { kategori: 'bolaBasket' }, { kategori: 'basket' }, { kategori: 'Basket' }]
    })
        .then(Berita => {
            res.render("pages/kategori-basket", { berita: Berita });
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
            res.render("pages/kategori-beladiri", { berita: Berita });
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
            res.render("pages/kategori-bulutangkis", { berita: Berita });
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
            res.render("pages/kategori-otomotif", { berita: Berita });
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
            res.render("pages/kategori-panahan", { berita: Berita });
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
            res.render("pages/kategori-renang", { berita: Berita });
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
            res.render("pages/kategori-sepakbola", { berita: Berita });
        })
        .catch(err => {
            console.log(err)
        })
}

const voli = async (req, res) => {
    berita.findAll({
        [Op.or]: [{ kategori: 'voli' }, { kategori: 'Bola Voli' }, { kategori: 'bola voli' }, { kategori: 'bolaVoli' }, { kategori: 'bola Voli' }]
    })
        .then(Berita => {
            res.render("pages/kategori-voli", { berita: Berita });
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports = { angkatBesi, basket, belaDiri, buluTangkis, otomotif, panahan, renang, sepakBola, voli }