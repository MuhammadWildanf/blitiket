const UserController = require('../controllers/Usercontroller')
const router = require('express').Router()



router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

//login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

router.use(function (req,res,next){
    console.log('test ya');
    next()
})

module.exports = router

