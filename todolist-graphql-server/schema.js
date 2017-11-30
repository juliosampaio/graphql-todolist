const { makeExecutableSchema } = require('graphql-tools');

const schema = `
    type User {
        id: ID!
        name: String!
        lastName: String
        email: String!
        birthDate: String!
        todos: [ToDo]!
    }
    type ToDo {
        id: ID!
        title: String!
        completed: Boolean!
        user: User!
    }
    type Query {
        findUser(id: ID!): User
    }
`;

module.exports = makeExecutableSchema({
    typeDefs: schema
});
