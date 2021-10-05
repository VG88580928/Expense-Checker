import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "衣服",
    amount: 1500,
    date: new Date(2020, 7, 18),
  },
  { id: "e2", title: "PS4", amount: 8000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "鞋子",
    amount: 2000,
    date: new Date(2021, 9, 28),
  },
  {
    id: "e4",
    title: "水電費",
    amount: 1000,
    date: new Date(2021, 9, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  console.log(expenses)

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
