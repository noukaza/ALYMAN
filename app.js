/* import lib */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

/* import routes */
const usersRoutes = require("./routes/user");

/* use morgan*/
app.use(morgan("dev"));
/* use body-parser*/
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* filter routes*/
app.use('/user',usersRoutes); // url : /user

/* catch unfound routes */
app.use((req, res, next) => {
    const  error = new Error("Not found");
    error.status(400);
    next(error);
});

/* respons errors */
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
