import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Certification() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // État pour la barre de recherche

    // Fonction pour récupérer les certificats depuis l'API
    const fetchCertifs = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/certifs');
            if (response.data.success) {
                setResults(response.data.data); // Mettre à jour les certificats
            } else {
                setError('Erreur lors de la récupération des certificats');
            }
        } catch (err) {
            setError('Erreur de communication avec le serveur');
            console.error(err);
        }
    };

    // Charger les certificats au montage du composant
    useEffect(() => {
        fetchCertifs();
    }, []);

    const handleFileChange = (e) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setFiles(Array.from(fileList));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (files.length === 0) {
            setError('Veuillez choisir au moins un fichier.');
            return;
        }

        const formData = new FormData();
        files.forEach((file) => formData.append('files[]', file));

        try {
            const response = await axios.post('http://localhost:8000/api/upload-files', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });

            setResults((prevResults) => [...prevResults, ...response.data.files]);
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Erreur lors de l\'upload.');
        }
    };

    const handleDelete = async (referenceNumber) => {
        try {
            await axios.delete(`http://localhost:8000/api/delete-file/${referenceNumber}`);
            // Mettre à jour la liste des fichiers après la suppression
            setResults(results.filter(file => file.reference_number !== referenceNumber));
        } catch (err) {
            setError('Erreur lors de la suppression du fichier.');
            console.error(err);
        }
    };

    // Filtrer les résultats en fonction de la recherche
    const filteredResults = results.filter((result) =>
        result.original_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.reference_number.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 space-y-4">
            <Header />
            <div className="px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Importer des fichiers PDF</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 focus:outline-none h-12 focus:items-center"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-blue-500 text-white rounded-sm text-xl font-bold hover:bg-blue-600 transition duration-300"
                        >
                            Ajouter
                        </button>
                    </form>

                    {error && <p className="text-red-500 mt-4">{error}</p>}

                    {results && results.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Résultats</h2>
                            {/* Barre de recherche */}
                            <input
                                type="text"
                                placeholder="Rechercher une certification..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Id</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Nom</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Numéro de Référence</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredResults.map((f, i) => (
                                        <tr key={i} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
                                            <td className="border border-gray-300 px-4 py-2">{f.original_name}</td>
                                            <td className="border border-gray-300 px-4 py-2">{f.reference_number}</td>
                                            <td className="flex border border-gray-300 px-4 py-2 justify-between">
                                                <a
                                                    href={`http://localhost:8000/storage/${f.processed_path}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 underline hover:text-blue-700"
                                                >
                                                    Voir le fichier
                                                </a>

                                                <a
                                                    href={`http://localhost:8000/api/download-file/${f.reference_number}`}
                                                    target="_blank"
                                                    download={f.original_name}
                                                    className="ml-4 text-blue-500 underline"
                                                >
                                                    Télécharger
                                                </a>

                                                <button
                                                    onClick={() => handleDelete(f.reference_number)}
                                                    className="ml-4 text-red-500 hover:text-red-700"
                                                >
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}