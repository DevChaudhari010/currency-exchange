import React from "react";
import { Currrencies } from "../currencies";
import "./Countries.css";

function Countries({ countries }) {
  return (
    <div className="Countries-container">
      {countries.map(({ name, population, currencies }) => {
        return (
          <div key={name} className="Countries-country-box">
            <span className="Countries-country-field">{name}</span>
            <span className="Countries-country-field">{`${population} Persons`}</span>
            <Currrencies currencies={currencies} />
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
