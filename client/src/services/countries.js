import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountriesByName($name: String!) {
    countries(name: $name) {
      name
      population
      currencies {
        code
        name
        exchangeRate
      }
    }
  }
`;

export { GET_COUNTRIES };
