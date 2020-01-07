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
const queriesRoutes = require('./routes/queries');

/* import config */
const swaggerDocRoute = process.env.SWAGGER_DOC_ROUTE;
const response = require("./configurations/responsesTempalte");
const configMongo = require('./configurations/mognodb')
const swaggerConfig = require("./configurations/swaggerConfig");
const headersConfig = require ("./middleware/check_header");

/* Connect to BDD */
mongoose.connect(configMongo.mongoUri, configMongo.option);

/* init swagger */
app.use(swaggerDocRoute, swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerConfig)));

/* use morgan*/
app.use(morgan("dev"));

/* allow access to /uploads route */
app.use('/uploads', express.static("uploads"))

/* use body-parser*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

/* allow cors */
app.use(headersConfig);

/* filter routes*/
app.use('/users', usersRoutes); // url : /users
app.use('/followers', followersRoutes); // url : /followers
app.use('/likes', likesRoutes); // url : /likes
app.use('/images', imagesRoutes); // url : /images
app.use('/comments', commentsRoutes) // url : comments
app.use('/q',queriesRoutes); // url : queries
app.use('/', (req, res) => res.redirect(swaggerDocRoute)); // redirect to swagger doc 

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
