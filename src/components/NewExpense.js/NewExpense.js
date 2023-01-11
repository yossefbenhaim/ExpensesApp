import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDate = (enteredExpenseData) =>{
        const expenseData= {
            ...enteredExpenseData,
            id : Math.random().toString()

        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditing = () =>{
        setIsEditing(true);
    };

    const stopeEditing = () =>{
        setIsEditing(false);
    };

    return<div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add New Expenses</button>}
        {isEditing && ( 
            <ExpenseForm
                onSaveExpenseData={saveExpenseDate} 
                onCancel={stopeEditing}
            />
        )}
    </div>
};

export default NewExpense;