import React from "react";
import { useLazyQuery } from "@apollo/client";
import { Search } from "../components/search";
import { Countries } from "../components/countries";
import { GET_COUNTRIES } from "../services";

function CountriesPage() {
  const [getCountriesByName, { loading, data }] = useLazyQuery(GET_COUNTRIES);
  return (
    <div>
      <h1>Countries</h1>
      <Search
        onSearch={(searchTerm) => {
          getCountriesByName({ variables: { name: searchTerm } });
        }}
      />
      {data && !loading && <Countries countries={data.countries || []} />}
      {loading && <h3>Loading........ </h3>}
    </div>
  );
}

export default CountriesPage;
