const express = require('express')
const routerEvent = require('./routes/routerEvent')
const routerUser = require('./routes/routerUser')
const route  = require('./routes/index')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));


app.use(route);
app.use('/event', routerEvent);
app.use('/user', routerUser);


app.listen(port, () => {
  console.log(`Masuk ${port} bang messi`)
})