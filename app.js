const express = require('express');
const route = require('./routes/index');
const routerEvent = require('./routes/routerEvent');
const routerUser = require('./routes/routerUser');
const app = express();
const port = 3000;
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'blitiket',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    sameSite: true
  }
}));


app.use(route);
app.use('/event', routerEvent);
app.use('/user', routerUser);


app.listen(port, () => {
  console.log(`Masuk ${port} bang messi`)
})