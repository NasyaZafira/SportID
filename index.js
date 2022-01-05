const express = require('express')
const { Sequelize } = require('sequelize')
const PORT = 3000
const config = require('./app/config/config.json')
module.exports = config
const routerComments = require('./app/routes/routerComments')

//Menjadikan variabel app sebagai module express
const app = express()

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
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('views', 'app/views');
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(routerComments);


