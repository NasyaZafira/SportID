const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { addKomen } = require('../controllers/controllerComments')
const {register}= require('../controllers/register')
const { addLaporan } = require('../controllers/controllerLaporan');
const {showEditUser, editUser} = require('../controllers/user')
const { tentangKami } = require('../controllers/tentangKami')
const {getThumbnailBerita} = require('../controllers/newspage')
const {createBerita, showFormUpload, showAllBerita, 
    showUpdateBerita, updateBerita, deleteBerita} = require('../controllers/crudBerita')
const  {lihatsemua} = require('../controllers/controllerBeritaHomepage')
const { pusatBantuan } = require('../controllers/controlerPusatBantuan')
const controllerLogin = require("../controllers/controllerLogin");
const { angkatBesi, basket, belaDiri, buluTangkis, otomotif, panahan, renang, sepakBola, voli } = require('../controllers/kategoriBerita')
const { kebijakanPrivasi } = require('../controllers/kebijakan-privasi')

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
router.post('/comments', addKomen);
    
//Router untuk Controller Register
router.get('/register', (req, res) => res.render('pages/register'))
router.post('/register', register)

//Router untuk Memanggil homepage.ejs
router.get('/', lihatsemua );

//Router untuk Controller Laporan
router.get('/laporan', function(req, res) {
    res.render('pages/report');
});
router.post('/laporan', addLaporan);

//Router untuk Pusat Bantuan
router.get('/pusatbantuan', pusatBantuan)

//Router untuk tentang kami
router.get('/tentangKami', tentangKami)

router.get('/profile/:id', showEditUser)
router.post('/profile/:id/success', editUser)

//Router untuk Controller Newspage
router.get('/details/:id', getThumbnailBerita)

//Router untuk Controller Admin
router.get('/admin', showAllBerita)
router.post('/admin/upload', upload.single('imageBerita'), createBerita)
router.get('/admin/upload', showFormUpload)
router.get('/admin/update/:id', showUpdateBerita)
router.post('/admin/success/:id', upload.single('imageBeritaUpdate'), updateBerita)
router.get('/admin/delete/:id', deleteBerita)

//Router untuk Controller Login
router.get("/login", controllerLogin.getLogin);
router.post("/login", controllerLogin.postLogin);

//Router untuk Kategori Berita
router.get('/angkatBesi', angkatBesi)
router.get('/basket', basket)
router.get('/belaDiri', belaDiri)
router.get('/buluTangkis', buluTangkis)
router.get('/otomotif', otomotif)
router.get('/panahan', panahan)
router.get('/renang', renang)
router.get('/sepakBola', sepakBola)
router.get('/voli', voli)

//Router untuk Kebijakan Privasi
router.get('/kebijakanprivasi', kebijakanPrivasi)

module.exports = router