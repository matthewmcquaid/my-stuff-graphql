const { ApolloServer } = require('apollo-server');
const packageJson = require('./package.json');

const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')
const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`${packageJson.name}  ${packageJson.version}  has started ${url} `)
})