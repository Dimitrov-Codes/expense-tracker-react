import "./Chart.css"
import ChartBar from "./ChartBar";

export default function Chart(props) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let maxValue = (props.expenses.map(e => e.amount)).reduce((total, current) => total = total + parseInt(current), 0);


    return (
        <div className={"chart"}>
            {months.map((m, i) => (
                <ChartBar
                    key={Math.random() * 100}
                    month={m}
                    maxValue={maxValue}
                    monthlyExpenses={props.expenses.filter(e => e.date.getMonth() === i)}/>))}
        </div>
    )
}
