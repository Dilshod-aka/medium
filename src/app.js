const express  = require("express");

const cardRouter = require('./routes/card.route');

const app = express()

app.use(express.json())

app.use('/', cardRouter) 

app.listen(5000, () => console.log('*5000'))