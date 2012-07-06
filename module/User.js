module.exports = {
    user: {
        get: function (request, response) {
            var UserModel = require('../model/User');
            var query = request.querystring;
            UserModel.find({username: query.username}, function (err, docs) {
                if (docs.length) {
                    response.writeHead(200, {
                      'content-type': 'application/json'
                    });
                    response.end(JSON.stringify({ username: query.username }));
                } else {
                    response.writeHead(404, {
                      'content-type': 'application/json'
                    });
                    response.end(JSON.stringify({}));
                }
            });
        }
    }
};