import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React from 'react';
function NewExpense(props){
    function expenseSubmitHandler(expenseData){
        const newExpense={
            ...expenseData,
            id:Math.random.toString
        }
      props.onNewExpense(newExpense); 
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={expenseSubmitHandler}/>
        </div>
    );
}
export default NewExpense;