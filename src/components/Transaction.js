import React from "react";

const Transaction = () => {
  return (
    <>
      <li className="minus">
        Book <span>-$400</span>
        <button class="delete-btn">x</button>
      </li>
      <li className="plus">
        Cash <span>+$400</span>
        <button class="delete-btn">x</button>
      </li>
      <li className="plus">
        Cash <span>+$500</span>
        <button class="delete-btn">x</button>
      </li>
    </>
  );
};

export default Transaction;
