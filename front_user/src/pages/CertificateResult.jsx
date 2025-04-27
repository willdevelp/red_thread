import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CertificateResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const certificate = location.state?.certificate; // Récupérer les données du certificat depuis state

    if (!certificate) {
        return (
            <div className="text-center mt-10">
                <p className="text-red-500">Aucun certificat trouvé. Veuillez vérifier votre numéro de référence.</p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retour
                </button>
            </div>
        );
    }

    // Construire l'URL du fichier PDF
    const fileUrl = `http://localhost:8000/storage/processed_pdfs/processed_${certificate.original_name}`;

    return (
        <div className="w-full px-5 mx-auto my-auto">
            <div className="px-4 py-8 bg-white space-y-5">
                <h1 className="text-center text-3xl font-bold">Résultat du Certificat</h1>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800">Certificat de {certificate.original_name}</h3>
                    <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700">
                        <p><strong>Numéro de Référence :</strong> {certificate.reference_number}</p>
                        <p><strong>Chemin :</strong> {certificate.processed_path}</p>
                    </div>
                </div>

                {/* Afficher le fichier PDF */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">Aperçu du fichier PDF :</h3>
                    <iframe
                        src={fileUrl}
                        title="Aperçu du PDF"
                        className="w-full h-96 border rounded-md"
                    ></iframe>
                </div>

                {/* Bouton de téléchargement */}
                <div className="mt-4">
                    <a
                        href={fileUrl}
                        download={certificate.original_name}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600"
                    >
                        Télécharger le PDF
                    </a>
                </div>

                {/* Bouton de retour */}
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retour
                </button>
            </div>
        </div>
    );
}

export default CertificateResult;