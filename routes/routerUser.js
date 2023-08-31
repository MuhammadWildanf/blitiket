const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const midleware = require('../middlewares/auth')


// USER
router.get('/ticket',midleware.isLogin, midleware.isUser, Controller.readUserTicket) // menampilkan ticket yang sudah dibeli/pesan
router.get('/eventlist',midleware.isLogin, midleware.isUser, Controller.readEventList) // menampilkan event yang sudah dibuat oleh EO
router.get('/eventlist/:id',midleware.isLogin, midleware.isAdmin, Controller.editEvent) // menampilkan form edit untuk event yang sudah dibuat oleh EO
router.post('/eventlist/:id',midleware.isLogin, midleware.isAdmin, Controller.postEditEvent) // memposting form edit untuk event yang sudah dibuat oleh EO
router.get('/eventlist/:id/delete',midleware.isLogin, midleware.isAdmin, Controller.deleteEvent) // memposting form edit untuk event yang sudah dibuat oleh EO


module.exports = router