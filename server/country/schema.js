const { gql } = require("apollo-server");

const typeDefs = gql`
  type Country {
    name: String!
    population: String!
    currencies: [Currency!]!
  }

  type Currency {
    code: String!
    name: String!
    exchangeRate: String!
  }

  extend type Query {
    countries(name: String!): [Country]
  }
`;

module.exports = typeDefs;
