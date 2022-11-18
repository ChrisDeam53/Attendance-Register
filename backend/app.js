var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Adding extra modules
var bodyParser = require("body-parser");
var cors = require('cors');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// // The router for animals
// var animalsRouter = require('./routes/animal.routes');
// var userRouter = require('./routes/user.routes');

var app = express();

// adding cors module
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const login = require('./routes/api/login')
const table = require('./routes/api/tableView')
// new routes for authentication
require('./routes/api/auth')(app);
require('./routes/api/security')(app);


//Database connection code
const db = require("./models");
db.sequelize.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;