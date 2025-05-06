import React, { useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function QRcode() {
    const [scanResult, setScanResult] = useState(null);
    const [error, setError] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate(); // Initialiser useNavigate

    const handleScan = async (referenceNumber) => {
        try {
            const cleanedReferenceNumber = referenceNumber.trim(); // Supprimer les espaces
            console.log(cleanedReferenceNumber);
            const response = await axios.post('http://localhost:8000/api/handle-scan', {
                reference_number: cleanedReferenceNumber,
            });

            if (response.data.success) {
                // Rediriger vers la page front-end avec les informations du certificat
                navigate('/certificate-result', {
                    state: { certificate: response.data },
                });
            } else {
                setError(response.data.message || 'Erreur lors du scan');
            }
        } catch (err) {
            setError('Erreur lors de la communication avec le serveur');
            console.error(err);
        }
    };

    const handleImageUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setScanResult(null);
        setError(null);
        setIsScanning(true);

        try {
            const html5QrCode = new Html5Qrcode('reader');
            const result = await html5QrCode.scanFile(selectedFile, true); // Scanner l'image directement
            setScanResult(result);
            handleScan(result); // Appeler l'API avec le texte scanné
        } catch (err) {
            setError('Aucun QR code trouvé dans l\'image');
            console.error(err);
        } finally {
            setIsScanning(false);
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-lg shadow-md">
            <Header />
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Scanner un QR Code</h1>
                <div id="reader" className="w-full h-64 border-2 border-gray-300 rounded-lg"></div>
                <button
                    onClick={() => setError('Utilisez l\'option d\'importation d\'image pour scanner')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    disabled={isScanning}
                >
                    Démarrer le scan
                </button>
            </div>

            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Importer une image contenant un QR Code</h2>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    disabled={isScanning}
                />
            </div>

            {isScanning && (
                <div className="flex justify-center items-center mt-4">
                    <p className="text-blue-600 font-medium">Analyse en cours...</p>
                </div>
            )}

            {scanResult && (
                <div className="p-4 bg-green-50 rounded-lg mt-4">
                    <h3 className="font-bold text-green-800">Résultat du scan :</h3>
                    <p className="mt-2 text-green-600 break-all">{scanResult}</p>
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-50 rounded-lg mt-4">
                    <h3 className="font-bold text-red-800">Erreur :</h3>
                    <p className="mt-2 text-red-600">{error}</p>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default QRcode;