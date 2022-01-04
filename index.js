// load the things we need
const express = require('express');
const { Sequelize } = require('sequelize')
const router = require('./app/router/router')
const port = 3000;

var app = express();
appInit(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

function appInit(app) {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    //Static Files
    app.use( express.static('app/public'))

    // set the view engine to ejs
    app.set('views', 'app/views')
    app.set('view engine', 'ejs');

    // use res.render to load up an ejs view file
    // bagian Register Page
    app.get('/', function(req, res) {
        res.render('pages/register');
    });
}