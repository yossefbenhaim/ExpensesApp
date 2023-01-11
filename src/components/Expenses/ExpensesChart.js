import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChatr = (props) =>{
    const chartDataPoints = [
        {label: 'Jen', value: 0},
        {label: 'Fed', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for (const expense of props.expenses) {
        const expenseMount = expense.date.getMonth(); //start at 0 january => 0
        chartDataPoints[expenseMount].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChatr;