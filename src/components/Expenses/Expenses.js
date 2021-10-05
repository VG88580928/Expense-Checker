import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year  //花費對應年份
  ).sort((a,b) => b.date.getTime() - a.date.getTime());  //花費日期由上到下排列

  return (
    <Card className="expenses">
      <ExpensesFilter onSetYear={setYear} year={year} />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

/* 第二種寫法 &&運算符 如果第一個回傳true,則回傳第二個 */
/* {filteredExpense.length === 0 && <p>no items</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))} */
/* 第一種寫法 三元運算符
      {filteredExpense.length ? (
        filteredExpense.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))
      ) : (
        <p>no items</p>
      )} */
