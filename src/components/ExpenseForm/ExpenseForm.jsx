import {useState} from "react";
import ExpenseFormFields from "./ExpenseFormFields";

export default function ExpenseForm(props) {
    let initialState = {
        title: "", amount: "", date: ""
    }
    let [expense, setExpense] = useState(initialState)
    let [toggleForm, setToggleForm] = useState(false);

    function handleAdd(event) {
        event.preventDefault()
        if (!toggleForm) {
            setToggleForm(toggle => !toggle);
        } else {
            let formattedExpense = {
                ...expense, date: new Date(expense.date), amount: parseInt(expense.amount)
            }
            // console.log(formattedExpense)
            props.addExpense(formattedExpense);
            setExpense(initialState)
        }

    }

    function handleCancel() {
        setToggleForm(toggle => !toggle);
    }

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        setExpense(old => ({
            ...old, [name]: value
        }))
    }

    return (<div className="form-container">
            <form>
                {toggleForm && <ExpenseFormFields handleChange={handleChange} expense={expense}/>}
                <div className="form-controller">
                    {toggleForm && <button onClick={handleCancel}>Cancel</button>}
                    <button onClick={handleAdd}>Add New Expense</button>
                </div>
            </form>
        </div>)
}