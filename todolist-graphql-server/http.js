const http = require('http');

module.exports = function httpRequest(params, postData) {
    return new Promise(function(resolve, reject) {
        const req = http.request(params, function(res) {
            if (res.statusCode != 200) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            let body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });
            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', function(err) {
            reject(err);
        });
        if (postData) {
            req.write(postData);
        }
        req.end();
    });
}
