const axios = require("axios");

const getExchangeRateForCurrencies = async (currencies) => {
  try {
    const currencySymbols = currencies.reduce((symbols, { code }) => {
      symbols.push(code);
      return symbols;
    }, []);
    const exchangeRatesOfCurrencies = await axios.get(
      "http://data.fixer.io/api/latest",
      {
        params: {
          access_key: process.env.FIXER_API_KEY,
          base: process.env.BASE_COUNTRY_CODE,
          symbols: currencySymbols.join(),
        },
      }
    );
    return currencies.map(({ code, name }) => {
      const exchangeRate =
        (exchangeRatesOfCurrencies.data.rates &&
          exchangeRatesOfCurrencies.data.rates[code]) ||
        "ERROR";
      return { code, name, exchangeRate };
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getExchangeRateForCurrencies,
};
