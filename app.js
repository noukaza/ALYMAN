const express = require('express');
const app = express();

const usersRoutes = require("./routes/user");

app.use('/user',usersRoutes);

module.exports = app;