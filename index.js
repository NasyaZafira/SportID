const express = require('express');
const { Sequelize } = require('sequelize')
const router = require('./app/routes/index')
const PORT = 3000
const config = require('./app/config/config.json')
module.exports = config

//Menjadikan variabel app sebagai module express
const app = express()

//Memanggil fungsi appInit
appInit(app)

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
    const db = new Sequelize(
        config.development.database, 
        config.development.username,
        config.development.password,
        {
            host : config.development.host,
            port: config.development.port, 
            dialect : config.development.dialect,
            dialectOptions: config.development.dialectOptions,
            logging : false
        }
    )
    db.authenticate(
    ).then(console.log('Berhasil koneksi ke database'))
    .catch(err =>{
        console.log('Gagal koneksi ke local database', err)
        process.exit()
    });
});


function appInit(app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    
    //Static Files
    app.use(express.static('app/public'))

    // set the view engine to ejs
    app.set('views', 'app/views');
    app.set('view engine', 'ejs');
    
    // Set '/' from router
    app.use('/', router);
}