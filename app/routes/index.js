const express = require('express')
const router = express.Router()
const { addKomen } = require('../controllers/controllerComments')
const {register}= require('../controllers/register')
const { addLaporan } = require('../controllers/controllerLaporan');
const {showEditUser, editUser} = require('../controllers/user')
const  {lihatsemua , createBerita}  =require('../controllers/controllerBeritaHomepage')

//Router untuk Controller Comments
router.get('/comments', function(req, res) {
    res.render('pages/comment');
});

router.post('/comments', addKomen);

//Router untuk Controller Register
router.get('/register', (req, res) => res.render('pages/register'))
router.post('/register', register)

//Router untuk Memanggil homepage.ejs
router.get('/', lihatsemua );

//Router tambah berita
router.get('/tambahberita', createBerita)
router.post('/tambahberita', createBerita)

//Router untuk Controller Laporan
router.get('/laporan', function(req, res) {
    res.render('laporan');
});

router.post('/laporan', addLaporan);

router.get('/profile/:id', showEditUser)
router.post('/profile/:id/success', editUser)

module.exports = router