const { Event, Booking, Profile, User, Category } = require('../models')
const { Op } = require("sequelize")


class Controller {

    static home(req, res) {
        res.render('home')
    }


    /** event controller */

    static readAllEvent(req, res) {
        Event.findAll()
            .then((event) => {
                // res.send(event)
                res.render('event', { event })
            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static addEvent(req, res) {
        res.send('addevent')
    }

    static postAddEvent(req, res) {
        res.send('postevent')
    }

    static readEventById(req, res) {
        // console.log(req.params);
        const { id } = req.params
        Event.findByPk(id)
            .then((event) => {
                // res.send(event)
                res.render('event-detail', { event })
            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static buyTicketForm(req, res) {
        console.log(req.session.userId);
        const { id } = req.params
        let option = {
            where: {id}, include:{model:User}
        }; 
        Booking.create(option)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static postBuyTicket(req, res) {
        res.send('home')
    }

    static confimationPage(req, res) {
        res.send('home')
    }


    /**User Controller */

    static readUserTicket(req, res) {
        res.send('userticket')
    }

    static readEventList(req, res) {
        res.send('readEventList')
    }

    static editEvent(req, res) {
        res.send('editEvent')
    }

    static postEditEvent(req, res) {
        res.send('postEditEvent')
    }

    static deleteEvent(req, res) {
        res.send('deleteevent')
    }

}

module.exports = Controller