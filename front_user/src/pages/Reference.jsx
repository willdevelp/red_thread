import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Reference() {
    const [referenceNumber, setReferenceNumber] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Ajout de l'état isLoading
    const navigate = useNavigate(); // Hook pour rediriger vers une autre page

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Activer le chargement
        try {
            const response = await axios.get(`http://localhost:8000/api/upload-files/${referenceNumber}`);
            setError('');
            // Rediriger vers la page des résultats avec les données du certificat
            navigate('/certificate-result', { state: { certificate: response.data } });
        } catch (err) {
            setError('Certificat non trouvé. Vérifiez le numéro de référence.', err);
        } finally {
            setIsLoading(false); // Désactiver le chargement
        }
    };

    return (
        <div className="lg:w-1/2 px-5 mx-auto my-auto">
            <div className="container px-4 py-8 bg-white space-y-5">
                <h1 className="text-center text-3xl font-bold">Vérifier votre Référence</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                                Numéro de Référence :
                            </label>
                            <input
                                id="reference"
                                type="text"
                                value={referenceNumber}
                                onChange={(e) => setReferenceNumber(e.target.value)}
                                placeholder="Entrez votre numéro de référence"
                                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#2E86AB] hover:bg-blue-600 text-white px-4 py-2 rounded"
                            disabled={isLoading} // Désactiver le bouton pendant le chargement
                        >
                            {isLoading ? 'Vérification...' : 'Vérifier'}
                        </button>
                    </div>
                </form>

                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}

export default Reference;