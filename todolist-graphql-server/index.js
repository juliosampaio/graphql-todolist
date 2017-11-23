const graphqlExpress = require('apollo-server-express').graphqlExpress;
const graphiqlExpress = require('apollo-server-express').graphiqlExpress;
const express = require('express');
const app = express();
const port = 9090;


app.use('/graphql', graphqlExpress(({ user }) => {
    return {
        schema,
        context: { }
    };
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(port, function () {
  console.log(`GraphQL Server running on port ${port}`);
});
