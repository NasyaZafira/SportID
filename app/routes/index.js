const express = require('express')
const router = express.Router()
const { addKomen } = require('../controllers/controllerComments')
const {register}= require('../controllers/register')
const { addLaporan } = require('../controllers/controllerLaporan');
const {showEditUser, editUser} = require('../controllers/user')
const { tentangKami } = require('../controllers/tentangKami')

//Router untuk Controller Comments
router.get('/comments', function(req, res) {
    res.render('pages/comment');
});

router.post('/comments', addKomen);

//Router untuk Controller Register
router.get('/register', (req, res) => res.render('pages/register'))
router.post('/register', register)

//Router untuk Memanggil homepage.ejs
router.get('/', function(req, res) {
    res.render('homepage');
});

//Router untuk Controller Laporan
router.get('/laporan', function(req, res) {
    res.render('laporan');
});

router.post('/laporan', addLaporan);

//Router untuk tentang kami
router.get('/tentangKami', tentangKami)

router.get('/profile/:id', showEditUser)
router.post('/profile/:id/success', editUser)

module.exports = router