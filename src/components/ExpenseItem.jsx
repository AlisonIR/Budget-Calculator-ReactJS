import React from "react";
import { MdDelete } from "react-icons/md";

const ExpenseItem = ({ id, charge, amount, clearSingleExpense }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          onClick={() => clearSingleExpense(id)}
          className="clear-btn"
          aria-label="delete button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
