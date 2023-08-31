const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/Usercontroller')
const router = express.Router()

router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

//login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

router.use(function (req,res,next){
    console.log('test ya');
    next()
})

router.get('/', Controller.home)



module.exports = router