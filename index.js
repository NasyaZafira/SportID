// load the things we need
const express = require('express');
const { Sequelize } = require('sequelize');
const router = require('./app/router/router');
const config = require('./app/config/config.json');
const port = 3000;

module.exports = config;

var app = express();
appInit(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  const db = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect,
    logging: false,
  });
  db.authenticate()
    .then(() => {
      console.log('Succesfully connected to Local database');
    })
    .catch((thisError) => {
      console.error('Failed to connect into Local database', thisError);
      process.exit();
    });
});

function appInit(app) {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  //Static Files
  app.use(express.static('app/public'));

  // set the view engine to ejs
  app.set('views', 'app/views/pages');
  app.set('view engine', 'ejs');
  app.use('/', router);
}
