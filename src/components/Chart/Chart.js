import React from "react";
import ChartBar from './ChartBar';
import './Chart.css'


const Chart = props =>{

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value); //make the number from str to int
    const totalMaximum = Math.max(...dataPointValue);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum}  
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;