export default function ExpenseFormFields(props) {
    return (
        <div>
            <div className="form-control">
                <label>Title</label>
                <input type="text" onChange={props.handleChange} value={props.expense.title}
                    name="title"></input>
            </div>

            <div className="form-control">
                <label>Amount</label>
                <input type="number" onChange={props.handleChange} value={props.expense.amount}
                    name="amount" min={1} step={1}></input>
            </div>

            <div className="form-control">
                <label>Date</label>
                <input type="date" onChange={props.handleChange} value={props.expense.date}
                    name="date" min={(new Date().getFullYear() - 10) + "-01-01"}
                    max={(new Date().getFullYear() + 1) + "-01-01"}></input>
            </div>
        </div>
    )
}