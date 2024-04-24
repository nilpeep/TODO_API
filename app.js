"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert object:
app.use(express.json())

// Catch async-errors:
require('express-async-errors')
//* TEMPLATE - EJS

app.set('view engine', 'ejs')

app.set('views' , 'public')

app.all('/' , (req, res ) =>{
    // res.send({
    //     message:'hi'
    // })

    res.render('index')
})
/* ------------------------------------------------------- */
// Routes:


app.use('/api', require('./app/routes/todo.api.router'))
app.use('/view', require('./app/routes/todo.view.router'))

/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require('./app/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));