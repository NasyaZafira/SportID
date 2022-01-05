const express = require('express')
const { Sequelize } = require('../controller/index')
const router = express.Router()
const control = require('../controller/index')
const db = require('../models/index')

router.get('/profile/edit/:id', control.user.showEditUser)
router.post('/profile/edit/:id/success', control.user.editUser)

module.exports = router