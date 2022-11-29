import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

const initialExpenses = [];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const handleCharge = (e) => {
    setCharge(e.target.value);
    console.log(charge);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const clearAllExpenses = () => {
    expenses.filter((item) => {
      return setExpenses([]);
    });
  };

  const clearSingleExpense = (id) => {
    const edited = expenses.filter((item) => item.id !== id);
    setExpenses(edited);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = {
        id: Date.now(),
        charge,
        amount,
      };
      setExpenses([...expenses, singleExpense]);
      setAmount("");
      setCharge("");
    }
  };

  return (
    <>
      <h1>budget calculator</h1>
      <main className="App">
        <Form
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList
          expenses={expenses}
          clearAllExpenses={clearAllExpenses}
          clearSingleExpense={clearSingleExpense}
        />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
};
export default App;
