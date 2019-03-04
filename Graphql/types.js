// Here we will define the type of our query filed
const  {
    GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt, 
    GraphQLList 
} = require('graphql');

// Our data
let { movies } = require('./data.js');
let { directors } = require('./data.js');

// Movie type
movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type:GraphQLID },
        director: {
            type: new GraphQLList(directorType),
            resolve(source,args) {
                return directors.filter(director => director.id == source.directorId)
            }
        }
    })
});

// Director type

directorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt},
        movies: {
            type: new GraphQLList(movieType),
            resolve(source, args) {
                return movies.filter(movie => movie.directorId == source.id)
            }
        }
    })
})

exports.movieType = movieType;