require("dotenv").config();

const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser())

app.use(csurf({ cookie: true }))

app.use(function (req, res, next) {
  //res.locals.session = req.session;
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
})

app.use('/', require('./routes/index.route'));

app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`);
})