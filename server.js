var ApiServer = new require('apiserver');
var UserModule = require('./module/User');


var API = new ApiServer({port: 8888});
API.use(ApiServer.payloadParser());


API.addModule('v1', 'UserModule', UserModule);


API.router.addRoutes([
    ['/user/:username/?', 'v1/UserModule#user']
]);

API.listen();
