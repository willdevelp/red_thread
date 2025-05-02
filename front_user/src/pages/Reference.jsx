import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function Reference() {
    const [referenceNumber, setReferenceNumber] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/upload-files/${referenceNumber}`);
            setError('');
            setError('');
            // Rediriger vers la page des résultats avec les données du certificat
            navigate('/certificate-result', { state: { certificate: response.data } });
            console.log('response.data:', response.data);
        } catch (err) {
            setError('Certificat non trouvé. Vérifiez le numéro de référence.', err);
        } finally {
            setIsLoading(false); // Désactiver le chargement
        }
    };

    return (
        <div className="w-full bg-gray-100 space-y-24">
            <Header/>
            <div className=" p-4 lg:w-1/2 mx-auto space-y-8 bg-white rounded">
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
                            className="bg-[#2E86AB] hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
                            disabled={isLoading} // Désactiver le bouton pendant le chargement
                        >
                            {isLoading ? 'Vérification...' : 'Vérifier'}
                        </button>
                    </div>
                </form>

                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
            <Footer/>
        </div>
    );
}

export default Reference;