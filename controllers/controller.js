const { Event, Booking, Profile, User, Category } = require('../models')
const { Op } = require("sequelize")


class Controller {

    static home(req, res) {
        res.render('home')
    }


    /** event controller */

    static readAllEvent(req, res) {
        // console.log(req.session.role, '<<<');
        console.log(req.query);
        const role = req.session.role
        let { name, category } = req.query

        let option = {
            include: { model: Category },
            order: [['eventDate', 'DESC']],
            where: {}
        }

        // if (name && category) {
        //     option.where = {
        //         name: {
        //             [Op.iLike]: `%${name}%`,
        //         },
        //     };
        // }
        if (name) {
            option.where = {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            };
        }
        // if (category) {
        //     option.where.Category.name = category 
        // }

        Event.findAll(option)
            .then((event) => {
                if (role === 'eventOrganizer') {
                    // res.send(event)
                    console.log(event);
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
        const { id } = req.params
        let {errors} = req.query        

        Category.findAll()
            .then(category => {
                // res.send({event, category})
                res.render('event-add', { category, errors })
            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static postAddEvent(req, res) {
        // res.send('postevent')
        // res.send('postEditEvent')
        let { id } = req.params
        let foundId = +id
        let { name, location, eventDate, price, capacity, CategoryId } = req.body

        price = +price
        capacity = +capacity
        CategoryId = +CategoryId

        Event.create({ name, location, eventDate, price, capacity, CategoryId },
            {
                where: { id: foundId }
            })
            .then(result => {
                // res.send(result)
                res.redirect('/event')
            })
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    err = err.errors.map(error => {
                        return error.message
                    })
                    // res.send(err)
                    res.redirect(`/event/add?errors=` + err.join(';'));
                } 
                else {
                    res.send(err)
                }
            })
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

    static pesanan(req, res) {
        let userId = req.session.userId
        let option = {
            include: [
                {
                    model: User,
                    include: Profile
                },
                {
                    model: Event,
                    include: Category
                }
            ],
            where: {
                id: userId
            }
        };
        Booking.findAll(option, {

        })
            .then(booking => {
                res.render('pesanan', { booking })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static profile(req, res) {
        let userId = req.session.userId
        let option = {
            include: [{ model: Profile }],
            where: {
                id: userId
            }
        };
        User.findAll(option)
            .then(profile => {
                res.send(profile)
            })
            .catch(err => {
                res.send(err)
            })
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