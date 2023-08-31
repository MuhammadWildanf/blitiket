const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/Usercontroller')
const router = express.Router()
const login = require('./login')


router.get('/', Controller.home)

router.use(login)


module.exports = router