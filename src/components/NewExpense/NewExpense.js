import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{


  const [isClicked, setIsClicked] = useState(false);


  const addExpenseButtonHandler = () =>{
    setIsClicked(true)
  }

    const saveExpenseDataHandler =(enteredExpenseData)=>{
            const expenseData ={
                ...enteredExpenseData,
                id: Math.random().toString()
            }
            props.onAddExpense(expenseData)
    }
return (
  <div className="new-expense">
    {isClicked ? (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  setIsClicked={setIsClicked}/>
    ) : (
      <button onClick={addExpenseButtonHandler}>Add New Expense</button>
    )}
  </div>
);
}

export default NewExpense;