const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { addKomen } = require('../controllers/controllerComments')
const {register}= require('../controllers/register')
const { addLaporan } = require('../controllers/controllerLaporan');
const {showEditUser, editUser} = require('../controllers/user')
const {createBerita, showFormUpload, getThumbnailBerita} = require('../controllers/newspage')

//Deklarasi lokasi penyimpanan gambar dan nama gambar
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'app/public/images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//Deklarasi untuk mengupload gambar
const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        let ext = path.extname(file.originalname)
        if(ext !== '.png' && ext !== '.jpg' && ext !== 'jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024
    }
})

//Router untuk Controller Comments
// router.get('/details/:id', function(req, res) {
//     res.render('pages/newspage');
// });

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
    res.render('pages/report');
});

router.post('/laporan', addLaporan);

router.get('/profile/:id', showEditUser)
router.post('/profile/:id/success', editUser)

//Router untuk Controller Newspage
router.get('/details/:id', getThumbnailBerita)
router.post('/upload', upload.single('imageBerita'), createBerita)
router.get('/upload', showFormUpload)

module.exports = router