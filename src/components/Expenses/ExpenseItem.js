import React from 'react';
import './ExpenseItem.css';
import ExpnseDate from './ExpenseDate';
import Card from '../UI/Card'


const ExpanseItem = (props) =>{

    return (
        <Card className="expense-item">
           <ExpnseDate date={props.date} />
            <div className="expense-item__description">
                <h2 className="">{props.title}</h2>
                <div  className="expense-item__price">${props.amount}</div>
            </div>
           
        </Card>
        );
}

export default ExpanseItem;