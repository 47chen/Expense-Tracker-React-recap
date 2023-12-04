import React from "react";

const Transaction = ({ transaction, deleteTransaction }) => {
  const { id, text, amount } = transaction;

  return (
    <>
      <li key={id} className={amount > 0 ? "plus" : "minus"}>
        {text} <span> ${amount} </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
