import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import Chart from "./Chart/Chart";
export default function Expenses(props) {
    let ExpenseList;
    if (props.expenses.length === 0) {
        ExpenseList = <h1 className="fallback-content">No expenses found!</h1>
    }
    else {
        ExpenseList = props.expenses.map((i, index) => (
            <ExpenseItem
                key={index}
                title={i.title}
                amount={i.amount}
                date={i.date}
            />))
    }

    return (
        <div className='expenses-container'>
            <Chart expenses={props.expenses}/>
            <ExpenseFilter filterByYear={props.filterByYear} />
            {ExpenseList}
        </div>
    )
}