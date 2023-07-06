const express = require("express");

const userroutes = require('./routes/userroutes');
const todoroutes = require('./routes/todoroutes');
const blogroutes = require('./routes/blogroutes');

const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(userroutes);
app.use(todoroutes);
app.use(blogroutes);
module.exports = app;