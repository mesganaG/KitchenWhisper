import Chart from 'chart.js/auto'; // Import the Chart class from the chart.js package
import { Colors } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./chart.css";

function PieChart(props) {


    const data = {
        labels: props.labels,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        datasets: [
            {
                data: props.items,
                backgroundColor: [
                    'rgba(144, 238, 144, .5)',
                    'rgba(255, 165, 0, .5)',
                    'rgba(255, 0, 0, .5)',
                    'rgba(0, 0, 255, .5)',
                    'rgba(255, 255, 0, .5)',
                ],
                borderColor: 'rgba(0, 0, 0, .8)',
                hoverOffset: 2,
                barThickness: 50,
            }
        ]

    };

    const options = {
        aspectRatio: 1.4,
        scales: {
            y: {
                ticks: {
                    beginAtZero: true
                },
                grid: {
                    drawOnChartArea: false,
                }
            },
            x: {
                grid: {
                    display: false ,
                    drawOnChartArea: false,
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Nutrition Facts (mg)',
                color: 'black',
                font: {
                    size: 20,
                }
            },
            legend: {
                display: false,
                position: 'bottom',
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
            <Bar data={data} options={options} />
        </div>
    );
}

export default PieChart;
