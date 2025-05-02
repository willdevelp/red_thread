import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../layouts/Header';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChat';
import Footer from '../layouts/Footer';

function Dashboard() {
    const [scans, setScans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les données de la table scans
    const fetchScans = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/scans');
            if (response.data.success) {
                setScans(response.data.data); // Les 10 derniers scans sont déjà limités par l'API
            } else {
                setError('Erreur lors de la récupération des données');
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
        fetchScans();
    }, []);

    return (
        <>
            <Header />
            <div className="bg-gray-100 px-5 space-y-5 py-5">
                <h1 className="text-3xl font-bold">Bienvenue !</h1>

                <div className="space-y-3">
                    <p className="text-xl font-bold">Dashboard</p>
                    <div className="lg:flex justify-between space-y-5">
                        <BarChart />
                        <PieChart />
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-4">Liste des 10 derniers scans</h1>
                    {loading ? (
                        <p>Chargement des données...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Nom de la certification</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Statut</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Date du scan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scans.map((scan, i) => (
                                    <tr key={i} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2 text-center">{i+1}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">{scan.certif_name || 'N/A'}</td>
                                        <td
                                            className={`border border-gray-300 px-4 py-2 text-center ${
                                                scan.status === 'valide' ? 'text-green-500' : 'text-red-500'
                                            }`}
                                        >
                                            {scan.status}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {new Date(scan.scanned_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;