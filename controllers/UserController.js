const { User } = require('../models/index')
const bcrypt = require('bcrypt');

class UserController {


    static registerForm(req, res) {
        res.render('registerForm')
    }
    static register(req, res) {
        const { userName, email, password, role } = req.body
        User.create({ userName, email, password, role })
            .then(newUser => {
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err.message)
            }
            )
    }

    static loginForm(req, res) {
        const {error} = req.query
        res.render('loginForm', {error})
    }
    static login(req, res) {
        const { email, password } = req.body
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if (isValidPassword) {
                        return res.redirect('/')
                    } else {
                        const error = "invalid username/password"
                        return res.redirect(`/login?error=${error}`)
                    }
                } else {
                    const error = "invalid username/password"
                    return res.redirect(`/login?error=${error}`)
                }

            })
            .catch((err) => {
                res.send(err.message)
            })
    }

}


module.exports = UserController