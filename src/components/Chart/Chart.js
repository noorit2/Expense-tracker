import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
const Chart= (props) =>{
    let expenseValues=props.dataPoints.map((dp) => dp.value);
    let mxValue=Math.max(...expenseValues);
return(
    <div className="chart">
        {props.dataPoints.map((datapoint) => (
            <ChartBar 
            key={datapoint.label}
            value={datapoint.value}
            maxValue={mxValue}
            label={datapoint.label}/>
        ))}
    </div>
);
}
export default Chart;
