const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const midleware = require('../middlewares/auth')


// EVENT
router.get('/add', midleware.isLogin, midleware.isAdmin, Controller.addEvent) // menampilkan form untuk membuat form khusus eo
router.post('/add',midleware.isLogin, midleware.isAdmin, Controller.postAddEvent) // memposting form 


// router.get('/')
router.get('/confirmation',midleware.isLogin, midleware.isAdmin, Controller.confimationPage) // checkout confirmation page
router.get('/:id',midleware.isLogin, midleware.isAdmin, Controller.readEventById) // untuk menampilkan detail event
router.get('/:id/buy',midleware.isLogin, midleware.isAdmin,Controller.buyTicketForm) // untuk customer masuk ke dalam form pembelian tiket
router.post('/:id/buy',midleware.isLogin, midleware.isAdmin, Controller.postBuyTicket) // untuk memposting pembelian tiket  => redirect ke /event/confirmation

module.exports = router