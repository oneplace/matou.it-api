var ApiServer = require('apiserver');
var settings = require('./settings.json');
var mongoose = require('mongoose');

// Modules
var UserModule = require('./module/User');

// init
var API = new ApiServer({port: 8888});

// config
API.use(ApiServer.payloadParser());
API.addModule('v1', 'UserModule', UserModule);

API.router.addRoutes([
    ['/user/:username/?', 'v1/UserModule#user']
]);

// run
API.listen();
