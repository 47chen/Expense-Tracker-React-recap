import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
