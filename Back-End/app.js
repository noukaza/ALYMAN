/* import lib */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");

/* import routes */
const usersRoutes = require("./routes/users");
const commentsRoutes = require("./routes/comments");
const followersRoutes = require("./routes/followers");
const imagesRoutes = require("./routes/images");
const likesRoutes = require("./routes/likes");

const authenticationMongo = "";
if (process.env.MONGODB_USER !== ""){
    authenticationMongo = process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@";
}
mongoose.connect(
    "mongodb://" + authenticationMongo + process.env.MONGODB_HOST + ":" + process.env.MONGODB_PORT + "/"+ process.env.MONGODB_DATA,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });


const swaggerConfig = {
    swaggerDefinition : {
        info:{
            title: "LYMAN",
            description : "instagrame ",
            contact :{
                name:"instagram"
            },
            servers:["http://localhost:3001"]
        }       
    },
    apis: ["./routes/*.js"]
}
const swagerDocs = swaggerJsDoc(swaggerConfig)
app.use('/doc',swaggerUi.serve,swaggerUi.setup(swagerDocs));

/* use morgan*/
app.use(morgan("dev"));
app.use('/uploads', express.static("uploads"))

/* use body-parser*/
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* allow cors */
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin","*");
   res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    /* or allow all
    /*
    res.header(
        'Access-Control-Allow-Headers',
        '*');
    */

    /* config allow methods  */
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
    }
    next();
});

/* filter routes*/
app.use('/user', usersRoutes);              // url : /user
app.use('/follower', followersRoutes);       // url : /follower
app.use('/like', likesRoutes);               // url : /like
app.use('/image', imagesRoutes);             // url : /image
app.use('/comment', commentsRoutes)          // url : comment

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
