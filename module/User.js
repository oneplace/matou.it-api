module.exports = {
    user: {
        get: function (request, response) {
            response.writeHead(200, {
              'content-type': 'application/json'
            });
            var query = request.querystring;
            response.end(JSON.stringify({ username: query.username }));
        }
    }
};