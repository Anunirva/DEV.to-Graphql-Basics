// Get all required libraries
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./Graphql/query.js');
const {mutationType} = require('./Graphql/mutation.js');

// Setting up App and Port
const app = express();
const port = 4200;

// Define the schema
const schema = new GraphQLSchema({query: queryType, mutation: mutationType});

// Setup GraphQL server
app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port , () => console.log("Working..!!"));

