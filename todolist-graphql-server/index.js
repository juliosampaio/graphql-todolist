const { graphqlExpress } = require('apollo-server-express');
const { graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const express = require('express');
const schema = require('./schema');
const app = express();
const port = 9090;


app.use('/graphql', bodyParser.json(), graphqlExpress(({ user }) => {
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
