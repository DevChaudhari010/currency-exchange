const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Mutation {
    login(email: String!, password: String!): String
  }
`;

module.exports = typeDefs;
