import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

// Enregistrement des composants ChartJS
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
);

function PieChart() {
    const [validCount, setValidCount] = useState(0);
    const [invalidCount, setInvalidCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les statistiques des scans
    const fetchScanStats = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/scan-stats');
            if (response.data.success) {
                setValidCount(response.data.data.valid);
                setInvalidCount(response.data.data.invalid);
            } else {
                setError('Erreur lors de la récupération des statistiques');
            }
        } catch (err) {
            setError('Erreur de communication avec le serveur');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Appeler l'API au chargement du composant
    useEffect(() => {
        fetchScanStats();
    }, []);

    // Options de la chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 10,
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
        cutout: 0, // Pour le remplissage du camembert
    };

    // Données du Camembert
    const data = {
        labels: ['Scan Réussi', 'Scan Échoué'],
        datasets: [
            {
                label: 'Scan',
                data: [validCount, invalidCount],
                backgroundColor: [
                    '#28A745',   // Vert
                    '#C92F32',   // Rouge
                ],
                borderWidth: 1,
                hoverOffset: 15,
            },
        ],
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Répartition des Scans</h2>
                <div className="flex space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-600"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-red-600"></span>
                </div>
            </div>

            {loading ? (
                <p>Chargement des données...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}

export default PieChart;