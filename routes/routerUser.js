const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()


// USER
router.get('/ticket', Controller.readUserTicket) // menampilkan ticket yang sudah dibeli/pesan


router.get('/eventlist', Controller.readEventList) // menampilkan event yang sudah dibuat oleh EO
router.get('/eventlist/:id', Controller.editEvent) // menampilkan form edit untuk event yang sudah dibuat oleh EO
router.post('/eventlist/:id', Controller.postEditEvent) // memposting form edit untuk event yang sudah dibuat oleh EO
router.get('/eventlist/:id/delete', Controller.deleteEvent) // memposting form edit untuk event yang sudah dibuat oleh EO


module.exports = router