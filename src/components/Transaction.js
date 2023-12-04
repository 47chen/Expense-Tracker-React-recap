import React from "react";

const Transaction = ({ key, amount, text }) => {
  return (
    <>
      <li key={key} className={amount > 0 ? "plus" : "minus"}>
        {text} <span> ${amount} </span>
        <button class="delete-btn">x</button>
      </li>
    </>
  );
};

export default Transaction;
