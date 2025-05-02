import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
} from 'chart.js'
//Enregistrement des composants ChartJS
ChartJS.register(
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
)

function BarChat() {
    
    // options du diagramme avec barres
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
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
                        return `${label}: ${value}`;
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
    };

    // données du diagramme avec barres
    const data ={
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [
            {
                label: 'Nombre de scans/jours',
                data: [12, 19, 3, 5, 2, 3, 28],
                backgroundColor: '#2E86AB',
                borderColor: '#2E86AB',
                borderWidth: 1,
                borderRadius: 3,
                hoverBackgroundColor: '#2E86AB',
            },
        ],
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Analyse des scans</h2>
            <div className="relative h-72 md:h-72 w-full">
                <Bar options={options} data={data} />
            </div>
            <div className="mt-4 text-sm text-gray-500">
                <p>Données mises à jour le {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default BarChat
