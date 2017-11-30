const request = require('./http');

module.exports = {
    Query: {
        findUser: (root, data, context) => {
            return request({
                host: '127.0.0.1',
                port: 3000,
                method: 'GET',
                path: `/users/${data.id}`
            });
        }
    }
};
