const express = require('express');
const app = express();

const usersRoutes = require("./routes/users");

app.use('/user',usersRoutes);

module.exports = app;