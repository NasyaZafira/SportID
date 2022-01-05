const express = require('express');
const router = express.Router();
// const controlComments = require('../controller/controllerComments');
const { addKomen } = require('../controller/controllerComments')


router.get('/comments', function(req, res) {
    res.render('comment.ejs');
});

router.post('/comments', addKomen);



module.exports = router;