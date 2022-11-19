import {useEffect, useState} from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import React from "react";
import "./App.css"

function App() {
    let [year, setYear] = useState(2020);
    let [id, setId] = useState(5);
    const [expenses, setExpenses] = useState([
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);
    const [yearlyExpense, setYearlyExpense] = useState(expenses.filter(expense => expense.date.getFullYear() === 2020))
    // useEffect(() => {filterByYear(year)}, [expenses])
    function filterByYear(year) {
        setYearlyExpense(expenses.filter(expense => expense.date.getFullYear() === year))
    }

    function addExpense(newExpense) {
        setYear(newExpense.date.getFullYear);
        newExpense.id = "e" + id;
        setId(id => id + 1);
        setExpenses(old => [...old, newExpense]);


    }

    return (
        <div>
            <h2>Lets get started!</h2>
            <ExpenseForm addExpense={addExpense}/>
            <Expenses filterByYear={filterByYear} expenses={yearlyExpense}/>
        </div>
    );
}

export default App;
