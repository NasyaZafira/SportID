const express = require('express');
const {
    Sequelize
} = require('sequelize')
const router = require('./app/routes/index')
const PORT = process.env.PORT || 3000
const config = require('./app/config/config.json');
const { password } = require('pg/lib/defaults');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const session = require('express-session');

module.exports = config
const bodyParser = require("body-parser");

//Menjadikan variabel app sebagai module express
const app = express()

//Memanggil fungsi appInit
appInit(app)

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
    const db = new Sequelize(
        config.production.database, 
        config.production.username,
        config.production.password,
        {
            host : config.production.host,
            port: config.production.port, 
            dialect : config.production.dialect,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
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
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
    const oneDay = 1000 * 60 * 60;
    app.use(
        session({
            secret: 'thisSecretKey',
            saveUninitialized: true,
            cookie: { maxAge: oneDay },
            resave: false
        })
    )
    
    //Static Files
    app.use(express.static('app/public'))

    // set the view engine to ejs
    app.set('views', 'app/views');
    app.set('view engine', 'ejs');
    // Set '/' from router
    app.use('/', router);
}
