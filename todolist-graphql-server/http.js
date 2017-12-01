const http = require('http');

module.exports = function httpRequest(params, postData) {
    params = Object.assign({
        host: '127.0.0.1',
        port: 3030,
    }, params);
    if (params.method === 'POST' || params.method === 'PUT' || params.method === 'PATCH') {
        postData = JSON.stringify(postData);
        params.headers = {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    }
    return new Promise(function(resolve, reject) {
        const req = http.request(params, function(res) {
            if (res.statusCode < 200 || res.statusCode >= 300) {
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
