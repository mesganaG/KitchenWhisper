import Chart from 'chart.js/auto'; // Import the Chart class from the chart.js package
import { Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./chart.css";

function PieChart(props) {


    const data = {
        labels: ['Protein', 'Carbs', 'Fat'],
        datasets: [
            {
                data: props.items,
                backgroundColor: [
                    'rgba(144, 238, 144, .8)',
                    'rgba(255, 165, 0, .8)',
                    'rgba(255, 0, 0, .8)'
                ],
                borderColor: 'rgba(0, 0, 0, 0)',
                hoverOffset: 2,
            }
        ]

    };

    const options = {
        aspectRatio: 3,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: 'start',
                labels: {
                    color: 'black',
                    fontSIze: 12,
                    boxWidth: 12,
                    position: 'bottom',
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                titleColor: 'black',
                bodyColor: 'black',
                borderColor: 'black',

            
            }

        },
        responsive: true,
    }

    Chart.register(Colors);
    return (
        <div className="pie-chart">
            <Pie data={data} options={options} />
        </div>
    );
}

export default PieChart;
