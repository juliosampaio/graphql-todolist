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
    },
    User: {
        birthDate: (root) => new Date(root.dob * 1000),
        todos: (root) => {
            return request({
                host: '127.0.0.1',
                port: 3000,
                method: 'GET',
                path: `/users/${root.id}/todos`
            });
        },
        lastName: (root) => root.last_name
    }
};
