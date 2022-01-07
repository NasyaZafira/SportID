const express = require('express');
const router = express.Router();
const { addLaporan } = require('../controller/controllerLaporan');

router.get('/laporan', function(req, res) {
    res.render('laporan.ejs');
});

router.post('/laporan', addLaporan);

module.exports = router;