const express = require('express')
const routerEvent = require('./routes/routerEvent')
const routerUser = require('./routes/routerUser')
const route = require('./routes/index')
const app = express()
const port = 3000
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'blitiket',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    sameSite: true
  }
}))

app.use(route);



app.listen(port, () => {
  console.log(`Masuk ${port} bang messi`)
})