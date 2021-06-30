const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
require("dotenv").config();
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const port = 4001;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`login service ready at ${url}`);
});
