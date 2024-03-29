import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import { useState, useEffect } from "react";

import React from "react";

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salray", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]);

  const initIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((total, item) => (total += item), 0)
    .toFixed(2);

  const initExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((total, item) => (total += item), 0)
    .toFixed(2);

  const deleteTransaction = (id) => {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(newTransactions);
    console.log(transactions);
    console.log(id);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
};

export default App;
