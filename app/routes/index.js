const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

//Import Middleware
const { checkLoginUser, checkLoginAdmin } = require('../middleware/checkLogin')

//Import Controller
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
const {showAllUser, showUpdateAdmin, updateAdmin, showUpdatePasswordUser, updatePasswordUser} = require('../controllers/admin')

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
router.post('/details/:id', checkLoginUser, addKomen);
    
//Router untuk Controller Register
router.get('/register', (req, res) => res.render('pages/register', {
    loggedName: req.session.userName, 
    loggedNameAdmin: req.session.adminName
}))
router.post('/register', register)

//Router untuk Memanggil homepage.ejs
router.get('/', lihatsemua );

//Router untuk Controller Laporan
router.get('/laporan', function(req, res) {
    res.render('pages/report', {
        loggedName: req.session.userName, 
        loggedNameAdmin: req.session.adminName
    });
});
router.post('/laporan', addLaporan);

//Router untuk Pusat Bantuan
router.get('/pusatbantuan', pusatBantuan)

//Router untuk tentang kami
router.get('/tentangKami', tentangKami)

//Router untuk Controller User
router.get('/profile', checkLoginUser, showEditUser)
router.post('/profile/success', editUser)

//Router untuk Controller Newspage
router.get('/details/:id', getThumbnailBerita)

//Router untuk Controller Admin
router.get('/admin', checkLoginAdmin, showUpdateAdmin)
router.post('/admin/update', updateAdmin)
router.get('/admin/list-berita', checkLoginAdmin, showAllBerita)
router.post('/admin/list-berita/upload', upload.single('imageBerita'), createBerita)
router.get('/admin/list-berita/upload', checkLoginAdmin, showFormUpload)
router.get('/admin/list-berita/update/:id', checkLoginAdmin, showUpdateBerita)
router.post('/admin/list-berita/update/:id/success', upload.single('imageBeritaUpdate'), updateBerita)
router.get('/admin/list-berita/delete/:id', checkLoginAdmin, deleteBerita)
router.get('/admin/list-user', checkLoginAdmin, showAllUser)
router.get('/admin/list-user/update/:id', checkLoginAdmin, showUpdatePasswordUser)
router.post('/admin/list-user/update/:id/success', updatePasswordUser)

//Router untuk Controller Login
router.get("/login", controllerLogin.getLogin);
router.post("/login", controllerLogin.postLogin);

//Router untuk Kategori Berita
router.get('/angkatbesi', angkatBesi)
router.get('/basket', basket)
router.get('/beladiri', belaDiri)
router.get('/bulutangkis', buluTangkis)
router.get('/otomotif', otomotif)
router.get('/panahan', panahan)
router.get('/renang', renang)
router.get('/sepakbola', sepakBola)
router.get('/bolavoli', voli)

//Router untuk Kebijakan Privasi
router.get('/kebijakanprivasi', kebijakanPrivasi)

//Menghapus Session
router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
  })

module.exports = router