import React from "react";

const IncomeExpense = ({ transactions }) => {
  const income = transactions
    .filter((tranaction) => tranaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2);

  const expense = transactions
    .filter((tranaction) => tranaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
