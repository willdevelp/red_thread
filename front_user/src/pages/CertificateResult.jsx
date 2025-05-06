import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css';  
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function CertificateResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const certificate = location.state?.certificate.certificate;

    if (!certificate) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <p className="text-red-600 text-lg font-semibold mb-4">
                    Aucun certificat trouvé. Veuillez vérifier votre numéro de référence.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Retour
                </button>
            </div>
        );
    }

    const fileUrl = `http://localhost:8000/storage/${certificate.processed_path}`;
    console.log('fileUrl:', fileUrl);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow flex items-center justify-center py-10">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-center text-4xl font-extrabold text-[#2E86AB] mb-8">
                        Résultat du Certificat
                    </h1>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Certificat de {certificate.original_name}
                        </h3>
                        <div className="bg-gray-100 p-6 rounded-lg text-gray-700 shadow-sm">
                            <p className="mb-2">
                                <strong>Numéro de Référence :</strong> {certificate.reference_number}
                            </p>
                            <p>
                                <strong>Chemin :</strong> {certificate.processed_path}
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Aperçu du fichier PDF :
                        </h3>
                        <iframe
                            src={fileUrl}
                            title="Aperçu du PDF"
                            className="w-full h-96 border rounded-lg shadow-md"
                        ></iframe>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <a
                            href={`http://localhost:8000/api/download-file/${certificate.reference_number}`}
                            download={certificate.original_name}
                            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-center"
                        >
                            Télécharger le PDF
                        </a>
                        <button
                            onClick={() => navigate('/')}
                            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Retour
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CertificateResult;