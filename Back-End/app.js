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

const swaggerDocRoute = process.env.SWAGGER_DOC_ROUTE;
const response = require("./configurations/responsesTempalte");
const configMongo = require('./configurations/mognodb')

mongoose.connect(configMongo.mongoUri, configMongo.option);

const swaggerConfig = {
    swaggerDefinition: {
        info: {
            title: "LYMAN",
            description: "instagrame ",
            contact: {
                name: "instagram"
            },
            servers: ["http://localhost:3001"]
        }
    },
    apis: ["./routes/*.js", "./configurations/*.js"]
}
const swagerDocs = swaggerJsDoc(swaggerConfig)
app.use(swaggerDocRoute, swaggerUi.serve, swaggerUi.setup(swagerDocs));

/* use morgan*/
app.use(morgan("dev"));
app.use('/uploads', express.static("uploads"))

/* use body-parser*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

/* allow cors */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    /* config allow methods  */
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    }
    next();
});

/* filter routes*/
app.use('/', (req, res) => res.redirect(swaggerDocRoute)); // redirect to swagger doc 
app.use('/users', usersRoutes); // url : /users
app.use('/followers', followersRoutes); // url : /followers
app.use('/likes', likesRoutes); // url : /likes
app.use('/images', imagesRoutes); // url : /images
app.use('/comments', commentsRoutes) // url : comments

/* catch unfound routes */
app.use((req, res, next) => {
    const error = new Error("Page not found");
    next(error);
});

/* respons errors */
app.use((error, req, res, next) => {
    response(res, 500, false, error.message)
});

module.exports = app;
