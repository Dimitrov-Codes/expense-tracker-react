import { useState } from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"

import "./App.css"
function App() {
  let id = 5;

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
  function filterByYear(year) {
    setYearlyExpense(expenses.filter(expense => {
      console.log(expense.date.getFullYear() === year)
      return expense.date.getFullYear() === year
    }))
  }

  function addExpense(newExpense) {
    newExpense.id = "e" + id;
    id++;
    setExpenses(old => [...old, newExpense]);
  }

  return (
    <div>
      <h2>Lets get started!</h2>
      <ExpenseForm addExpense={addExpense} />
      <Expenses filterByYear={filterByYear} expenses={yearlyExpense} />
    </div>
  );
}
export default App;
