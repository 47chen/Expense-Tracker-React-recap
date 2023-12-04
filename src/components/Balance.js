import React from "react";
import Transaction from "./Transaction";

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((total, item) => (total += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
};

export default Balance;
