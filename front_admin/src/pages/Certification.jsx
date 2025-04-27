import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Certification() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const [results, setResults] = useState([]);

    // Charger les fichiers depuis localStorage au chargement de la page
    useEffect(() => {
        const storedResults = localStorage.getItem('uploadedFiles');
        if (storedResults) {
            setResults(JSON.parse(storedResults));
        }
    }, []);

    // Sauvegarder les résultats dans localStorage à chaque mise à jour
    useEffect(() => {
        localStorage.setItem('uploadedFiles', JSON.stringify(results));
    }, [results]);

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
            const response = await fetch('http://localhost:8000/api/upload-files', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
            });

            if (!response.ok) {
            throw new Error('Erreur lors de l’upload.');
            }

            const data = await response.json();
            setResults((prevResults) => [...prevResults, ...data.files]);
        } catch (err) {
            setError(err.message || 'Erreur lors de l’upload.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
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
                                {results.map((f, i) => (
                                    <tr key={i} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{f.original_name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{f.reference_number}</td>
                                        <td className="border border-gray-300 px-4 py-2 justify-between">
                                            <Link
                                                to={`http://localhost:8000/storage/${f.processed_path}`}
                                                download
                                                className="text-blue-500 underline hover:text-blue-700"
                                            >
                                                Voir le PDF
                                            </Link>

                                            <Link
                                                to={`http://localhost:8000/download-file/${f.original_name}`}
                                                download={f.original_name}
                                                className="ml-4 text-blue-500 underline"
                                            >
                                                Télécharger
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}