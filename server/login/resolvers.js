const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const accounts = require("./data/accounts");

const resolvers = {
  Mutation: {
    login(parent, { email, password }) {
      const accountDetails = accounts.find(
        (account) => account.email === email && account.password === password
      );
      if (!accountDetails) {
        throw new UserInputError("Invalid argument value");
      }
      const { name, id } = accountDetails;
      return jwt.sign({ user: { name } }, process.env.AUTH_PRIVATE_KEY, {
        algorithm: "HS256",
        subject: id,
        expiresIn: "1d",
      });
    },
  },
};

module.exports = resolvers;
