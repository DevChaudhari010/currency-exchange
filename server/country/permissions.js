const { rule, shield } = require("graphql-shield");
const { AuthenticationError } = require("apollo-server");

const isAuthenticated = rule()((parent, args, { user }) => {
  if (user === null) {
    throw new AuthenticationError("Unauthorised");
  }
  return true;
});

const permissions = shield({
  Query: {
    countries: isAuthenticated,
  },
});

module.exports = { permissions };
