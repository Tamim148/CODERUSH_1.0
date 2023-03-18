const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Using the public folder as specified static resources
app.use(express.static('public'));

// Body Parser
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// view engine setup
app.set('view engine', 'ejs');

// Session and Flash
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitalized : false,
  })
);
app.use(flash());


// using routers
const userRoutes = require('./routes/user.routes');

app.use(userRoutes);

module.exports = app;