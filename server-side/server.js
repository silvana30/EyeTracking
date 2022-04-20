var http = require('http')
var https = require('https')
var path = require('path')
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    UserSchema = require('./models/UserSchema.js'),
    TrackingDataSchema = require('./models/TrackingDataSchema.js'),
    ImageSchema = require('./models/ImageSchema.js'),
    CalibrationSchema = require('./models/CalibrationSchema.js'),
    AOISchema = require('./models/AOISchema.js')
var router = express.Router();
var url = 'mongodb://localhost/User';
var restPort = 3000
var routes = require('./routes/RestRoutes');
var dbConfig = require('./config/DBconfig.js');
var bodyParser = require('body-parser')

app.use('/', router);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

mongoose.Promise = global.Promise;
routes(app);

var server = app.listen(restPort, function() {
    console.log('server started on: ' + restPort);
    connectToDatabase("local")
});

function connectToDatabase(environment) {
    mongoose.Promise = global.Promise;
    dbConfig.getConnectionConfig(environment, function(connectionConfig) {
        mongoose.connect('mongodb://' + connectionConfig.username + ':' + connectionConfig.password + '@' + connectionConfig.ip + ':' + connectionConfig.port + '/' + connectionConfig.database_name + '?authSource=' + connectionConfig.database_name,
          { useNewUrlParser: true },  { useUnifiedTopology: true });

        // CONNECTION EVENTS
        mongoose.connection.on('connected', function() {
            console.log('Mongoose connection open to ' + connectionConfig.ip);
        });

        // If the connection throws an error
        mongoose.connection.on('error', function(err) {
            console.log('Mongoose connection error: ' + JSON.stringify(err));
        });

        // When the connection is disconnected
        mongoose.connection.on('disconnected', function() {
            console.log('Mongoose connection disconnected');
        });
    });
}
