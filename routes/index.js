const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const midleware = require('../middlewares/auth')
const routerEvent = require('./routerEvent')
const routerUser = require('./routerUser')
const UserController = require('../controllers/UserController')

router.get('/', Controller.home)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

//login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

router.get('/pesanan',midleware.isLogin, midleware.isUser, Controller.pesanan) // memposting form edit untuk event yang sudah dibuat oleh EO
router.get('/profile',midleware.isLogin, midleware.isUser, Controller.profile) // menampilkan event yang sudah dibuat oleh EO
router.use('/user',routerUser)
router.use('/event',routerEvent)




module.exports = router