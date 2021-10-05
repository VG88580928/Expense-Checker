import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseFrom from "./ExpenseForm";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (<button type="button" onClick={startEditingHandler}>Add New Expense</button>)}
      {isEditing && <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpenses;
