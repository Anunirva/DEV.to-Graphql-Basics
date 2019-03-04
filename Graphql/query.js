const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const _ = require('lodash');

// Import types here
const { movieType } = require('./types.js');
let { movies } = require('./data.js');
let { directors } = require('./data.js')


// this is the root query where all our queries lives
// it should have name and fields
// every field must have type and resolve
// resolve is the place where we do all our actions like getting data from backend and all
// here we will create fileds for movies and directors
// given movie id u will get movie
// given director id u will get director details and movies he directed
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        test: {
            type: GraphQLString,
            resolve: () => 'Hello Aliens'            
        },
        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
               return movies.find(movie => movie.id == args.id);                
            
            }
        },
        director: {
            type: directorType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function(source, args) {
                return directors.find(director => director.id == args.id)
            }
        }
    }
});

exports.queryType = queryType;