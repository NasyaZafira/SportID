const express = require('express');
const { Sequelize } = require('sequelize')
const router = require('./app/routes/index')
const PORT = 3000
const config = require('./app/config/config.json');
const { password } = require('pg/lib/defaults');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = config
const bodyParser = require("body-parser");

//Menjadikan variabel app sebagai module express
const app = express()

//Memanggil fungsi appInit
const user = {
    user_name: 'tes username kevin',
    email: 'kevin@mail.com',
    password: '123456',
} 

const token = bcrypt.compare(user.password, user.password)
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
            /*
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
            */
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
    
    //Static Files
    app.use(express.static('app/public'))

    // set the view engine to ejs
    app.set('views', 'app/views');
    app.set('view engine', 'ejs');
    
    // Set '/' from router
    app.use('/', router);
}
