import React, { useState } from "react";

import './ExpenseForm.css';
const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount ] = useState('');
    const [enteredDate, setEnteredDate ] = useState('');


    const titleChange = (event) =>{
       setEnteredTitle(event.target.value)
    };

    const amountChenge = (event) =>{
        setEnteredAmount(event.target.value)
    };

    const dateChange = (event) =>{
        setEnteredDate(event.target.value)
    };

    const submitHendler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        
  
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHendler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                
                <input 
                    type="text" 
                    value={enteredTitle} 
                    onChange={titleChange}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                
                <input
                    type="number" 
                    value={enteredAmount} 
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChenge}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                
                <input 
                    type="date" 
                    value={enteredDate} 
                    min="2019-01-01" 
                    max="2029-12-31" 
                    onChange={dateChange}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cansel</button>
            <button type="submit">Add Expense</button></div>
    </form>
}
export default ExpenseForm;