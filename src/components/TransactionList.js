import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            amount={transaction.amount}
            text={transaction.text}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
