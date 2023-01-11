import React , { useState } from 'react';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChatr from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) =>{

  const [filteredYear, setFilteredYear]  = useState("2020");
  
  const filterChange = selectedYear =>{
      setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear} 
            onChangeFilter = {filterChange}
           />
           <ExpensesChatr expenses = {filteredExpenses}/>
          <ExpensesList items = {filteredExpenses}/>
        </Card>
      </div>
  );  
};

export default Expenses;