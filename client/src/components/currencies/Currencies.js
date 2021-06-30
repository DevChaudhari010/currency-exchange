import React, { useState } from "react";
import "./Currencies.css";

function Currency({ currency }) {
  const { name, exchangeRate } = currency;
  const [amount, setAmount] = useState("");
  const convertedAmount = parseFloat(amount / exchangeRate).toFixed(2);
  return (
    <div className="Currencies-currency-box">
      <span className="Currencies-currency-field">{name}</span>
      <input
        className="Currencies-currency-field"
        autoFocus
        type="number"
        autoComplete="off"
        placeholder="Enter Amount here..."
        onChange={(e) => setAmount(e.target.value)}
      />
      <span className="Currencies-currency-field">{exchangeRate}</span>
      <span className="Currencies-currency-field">{convertedAmount} EUR</span>
    </div>
  );
}

function Currrencies({ currencies }) {
  return (
    <div className="Currencies-container">
      {currencies.map((currency) => (
        <Currency key={currency.code} currency={currency} />
      ))}
    </div>
  );
}

export default Currrencies;
