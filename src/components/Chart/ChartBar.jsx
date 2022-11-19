import "./ChartBar.css";

export default function BarChart(props) {
    let height = 0;
    if (props.monthlyExpenses.length !== 0) {
        // console.log(props.expense[0].amount);
        let total = props.monthlyExpenses.reduce((total, current) => total = total + parseInt(current.amount), 0)
        height = Math.round((total / props.maxValue) * 100);
        // console.log(height)
    }

    return (
        <div className="chart-bar">
            <div className={"chart-bar__inner"}>
                <div className={"chart-bar__fill"} style={{height: height + "%"}}/>
            </div>
            <div className={"chart-bar__label"}>
                <p>
                    {props.month}
                </p>
            </div>
        </div>
    )


}