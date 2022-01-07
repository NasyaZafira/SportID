const express = require('express')
const { Sequelize } = require('sequelize')
const PORT = 3000
const config = require('./app/config/config.json')
module.exports = config
const routerLaporan = require('./app/routes/routerLaporan')

//Menjadikan variabel app sebagai module express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Static Files
app.use(express.static('app/public'))

// set the view engine to ejs
app.set('views', 'app/views');
app.set('view engine', 'ejs');

//Halaman homepage
app.get('/homepagelight', function(req, res){
    res.render('pages/Homepage-light')
});
app.get('/homepagedark', function(req, res){
    res.render('pages/Homepage-dark')
});

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
    const db = new Sequelize(
        config.development.database, 
        config.development.username,
        config.development.password,
        {
            host : config.development.host, 
            dialect : config.development.dialect,
            logging : false
        }
    )
    db.authenticate(
        
    ).then(console.log('Berhasil Connect ke database'))
    .catch(err =>{
        console.error('gagal konek ke database', err)
        process.exit()
    });
})

// IMPORT ROUTER LAPORAN
app.use(routerLaporan);

