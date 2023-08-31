const { Event, Booking, Profile, User, Category } = require('../models')
const { Op } = require("sequelize")


class Controller {

    static home(req, res) {
        res.render('home')
    }


    /** event controller */

    static readAllEvent(req, res) {
        // console.log(req.session.role, '<<<');
        const role = req.session.role

        Event.findAll({ include: Category })
            .then((event) => {
                if (role === 'eventOrganizer') {
                    // res.send(event)
                    // console.log(event);
                    res.render('event-admin', { event })
                } else {
                    res.render('event', { event })
                }
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
        // console.log(req.session.userId);
        const { id } = req.params
        let option = {
            where: { id }, include: { model: User }
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
        const { id } = req.params
        Event.findByPk(id, { include: Category })
            .then((event) => {
                Category.findAll()
                    .then(category => {
                        // res.send({event, category})
                        res.render('event-edit', { event, category })
                    })

            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static postEditEvent(req, res) {
        // res.send('postEditEvent')
        let { id } = req.params
        let foundId = +id
        let { name, location, eventDate, price, capacity, CategoryId } = req.body

        price = +price
        capacity = +capacity
        CategoryId = +CategoryId

        Event.update({ name, location, eventDate, price, capacity, CategoryId },
            {
                where: { id: foundId }
            })
            .then(result => {
                // res.send(result)
                res.redirect('/event')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static deleteEvent(req, res) {
        // res.send('deleteevent')
        let { id } = req.params
        let foundId = +id

        Event.destroy({
            where: {
                id: foundId
            }
        })
            .then(report => {
                res.redirect('/event')
            })
            .catch(error => {
                res.send(error.message)
            })
    }

}

module.exports = Controller