const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/Usercontroller')
const router = express.Router()
const midleware = require('../middlewares/auth')
const routerEvent = require('./routerEvent')
const routerUser = require('./routerUser')

router.get('/', Controller.home)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

//login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

router.use(routerEvent)
router.use(routerUser)




module.exports = router