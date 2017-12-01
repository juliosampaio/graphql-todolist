const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

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
    type Mutation {
        addToDo(userID: ID!, title: String!): ToDo!
    }
`;

module.exports = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers
});
