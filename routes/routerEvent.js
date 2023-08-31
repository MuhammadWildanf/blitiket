const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

// EVENT
router.get('/add', Controller.addEvent) // menampilkan form untuk membuat form khusus eo
router.post('/add', Controller.postAddEvent) // memposting form 


router.get('/', Controller.readAllEvent)
router.get('/confirmation', Controller.confimationPage) // checkout confirmation page
router.get('/:id', Controller.readEventById) // untuk menampilkan detail event
router.get('/:id/buy', Controller.buyTicketForm) // untuk customer masuk ke dalam form pembelian tiket
router.post('/:id/buy', Controller.postBuyTicket) // untuk memposting pembelian tiket  => redirect ke /event/confirmation

module.exports = router