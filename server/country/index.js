const { ApolloServer } = require("apollo-server");
const { applyMiddleware } = require("graphql-middleware");
const { buildFederatedSchema } = require("@apollo/federation");
require("dotenv").config();
const { permissions } = require("./permissions");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const port = 4002;

const server = new ApolloServer({
  schema: applyMiddleware(
    buildFederatedSchema([{ typeDefs, resolvers }]),
    permissions
  ),
  context: ({ req }) => {
    const user = req.headers.user ? JSON.parse(req.headers.user) : null;
    return { user };
  },
});

server.listen({ port }).then(({ url }) => {
  console.log(`country service ready at ${url}`);
});
