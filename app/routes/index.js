const express = require('express')
const { Sequelize } = require('../controller/index')
const router = express.Router()
const control = require('../controller/index')
const db = require('../models/index')

router.get('/edit/:id', control.user.showEditUser)
router.post('/success/:id', control.user.editUser)

module.exports = router