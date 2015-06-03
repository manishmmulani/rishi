var express = require('express');
//var partials = require('express-partials');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var dataRoute = require('./routes/data');

//mongodb and monk
var mongodb = require("mongodb");
var monk = require("monk");
var db = monk("localhost:9160/rishi");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

// ejs-partials are to enable extending layouts in views.
//app.use(partials());

app.use(logger('dev'));
app.use(bodyParser.json());
// changed extended to true so that if we have form whose element names are
// user[firstName], user[lastName] on submit, request.body would return
// the constructed object.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Custom filter
 * Update request cobter
 * Set db in each request object
 * Note that - order of this middleware is important.
 */
app.use(function(req, res, next) {
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/data', dataRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
