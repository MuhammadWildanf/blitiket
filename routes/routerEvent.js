const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const midleware = require('../middlewares/auth')


// EVENT
router.get('/add', midleware.isLogin, midleware.isUser, Controller.addEvent) // menampilkan form untuk membuat form khusus eo
router.post('/add',midleware.isLogin, midleware.isUser, Controller.postAddEvent) // memposting form 


// router.get('/')
router.get('/',midleware.isLogin, Controller.readAllEvent)
router.get('/confirmation',midleware.isLogin, midleware.isUser, Controller.confimationPage) // checkout confirmation page
router.get('/:id',midleware.isLogin, midleware.isUser, Controller.readEventById) // untuk menampilkan detail event
router.get('/:id/buy',midleware.isLogin, midleware.isUser,Controller.buyTicketForm) // untuk customer masuk ke dalam form pembelian tiket
router.post('/:id/buy',midleware.isLogin, midleware.isUser, Controller.postBuyTicket) // untuk memposting pembelian tiket  => redirect ke /event/confirmation

module.exports = router