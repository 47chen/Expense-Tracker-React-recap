import React from "react";
import { useState } from "react";

const AddTransaction = ({ transactions, setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const AddTransaction = (e) => {
    e.preventDefault();
    const newTransaction = [
      ...transactions,
      { id: transactions.length + 1, text, amount: parseInt(amount) },
    ];
    setTransactions(newTransaction);
    setText("");
    setAmount(0);
    console.log(transactions);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={AddTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
