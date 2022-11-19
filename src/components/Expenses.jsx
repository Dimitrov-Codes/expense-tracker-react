import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

export default function Expenses(props) {
    let renderContent;
    if (props.expenses.length === 0) {
        renderContent = <h1 className="fallback-content">No expenses found!</h1>
    }
    else {

        renderContent = props.expenses.map((i, index) => (
            <ExpenseItem
                key={index}
                title={i.title}
                amount={i.amount}
                date={i.date}
            />))
    }
    return (
        <div className='expenses-container'>
            <ExpenseFilter filterByYear={props.filterByYear} />
            {renderContent}
        </div>
    )
}