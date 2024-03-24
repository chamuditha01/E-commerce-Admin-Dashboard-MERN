import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js/auto to include all necessary components of Chart.js
import './index.css'; // Import CSS file for styling

const Analytics = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'category' // Ensure 'category' scale type for the x-axis
            }
        }
    };

    return (
        <div  style={{ width: '350px', height: '400px',marginLeft:'-59px',marginBottom:'100px'}}>
            <h1>Analytics</h1>
            <Line  data={data} options={options} />
            <br/>
            <br></br>
            <br></br>
            <Line data={data} options={options} />
        </div>
    );
}

export default Analytics;
