const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const midleware = require('../middlewares/auth')
const routerEvent = require('./routerEvent')
const routerUser = require('./routerUser')
const UserController = require('../controllers/Usercontroller')

router.get('/', Controller.home)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

//login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

router.use('/user',routerUser)
router.use('/event',routerEvent)




module.exports = router