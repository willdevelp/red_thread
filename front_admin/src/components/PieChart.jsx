import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

//Enregistrement des composants ChartJS
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
)

function PieChart() {
    
    // options de la chart
    const options = {
        reponsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 20,
                    font: {
                        size: 14,
                    },
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 16,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 14
                },
                padding: 10,
                displayColors: true,
            },
        },
        cutout: 0, //pour le remplissage du camembert
    };

    // données du Camembert
    const data = {
        labels: ['Scan Réussi', 'Scan Echoué'],
        datasets: [
            {
                label: 'Scan',
                data: [300, 50],
                backgroundColor: [
                    '#28A745',   // vert
                    '#C92F32',    // rouge
                ],
                borderWidth: 1,
                hoverOffset: 15,
            },
        ],
    }
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Répartition des dépenses</h2>
                <div className="flex space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-600"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-green-600"></span>
                </div>
            </div>
        
            <div className="relative h-72 md:h-72">
                <Pie options={options} data={data} />
            </div>
        
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.labels.map((label, index) => (
                <div key={index} className="flex items-center">
                    <span 
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                    ></span>
                    <span className="text-sm text-gray-600">
                        {label}: {data.datasets[0].data[index]}
                    </span>
                </div>
                ))}
            </div>
        </div>
    )
}

export default PieChart
