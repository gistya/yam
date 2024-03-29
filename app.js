#!/bin/env node
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('address', process.env.OPENSHIFT_NODEJS_IP);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('json spaces',0);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), app.get('address'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
