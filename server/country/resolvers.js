const axios = require("axios");
const { getExchangeRateForCurrencies } = require("./utils");

const resolvers = {
  Query: {
    countries: async (parent, { name }) => {
      try {
        const countries = await axios.get(
          `https://restcountries.eu/rest/v2/name/${name}`
        );
        return countries.data.map(async ({ name, population, currencies }) => {
          const currenciesWithExchangeRate =
            getExchangeRateForCurrencies(currencies);
          return { name, population, currencies: currenciesWithExchangeRate };
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
