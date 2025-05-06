import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import axios from 'axios';

function QRcodeNum() {
    const { refNum } = useParams();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [certificateData, setCertificateData] = useState(null);
    
    const fetchCertificate = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/upload-files/${refNum}`);
            if (response.data.success) {
                setCertificateData(response.data);
                setError('');
            } else {
                setError('Certificat non valide');
                setCertificateData(null);
            }
        } catch (err) {
            setError('Une erreur est survenue lors de la vérification du certificat');
            setCertificateData(null);
        } finally {
            setIsLoading(false);
        }
    };
    console.log(certificateData);

    useEffect(() => {
        fetchCertificate();
    }, [refNum]);

    if (isLoading) {
        return (
            <div>
                <Header />
                <div className="text-center py-8">
                    <p>Vérification du certificat en cours...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (certificateData) {
        return (
            <div>
                <Header />
                <div className='space-y-8'>
                    <div className='bg-green-500 text-center py-8'>
                        <p className='text-white text-2xl font-bold'>Certification Valide !!!!!!!</p>
                    </div>
    
                    <div className='p-4'>
                        <div className='mb-4'>
                            <p className='text-lg'>Nom : {certificateData.certificate.original_name}</p>
                            <p className='text-lg'>Numéro de Référence : {certificateData.certificate.reference_number}</p>
                        </div>

                        {certificateData.certificate.processed_path && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Aperçu du fichier PDF :
                                </h3>
                                <div className='px-24'>
                                    <iframe
                                        src={`http://localhost:8000/storage/${certificateData.certificate.processed_path}`}
                                        title="Aperçu du PDF"
                                        className="w-full md:w-1/2 h-128 mx-auto border rounded-lg shadow-md"
                                    ></iframe> 
                                </div>
                            </div>
                        )}
                    </div>
    
                    <div className='flex flex-col md:flex-row justify-between items-center p-4 mb-4'>
                        <p>Délivré le : {certificateData.certificate.created_at}</p>
                        <button 
                            className='bg-[#2E86AB] hover:bg-red-600 text-white rounded px-4 py-2 mb-2 md:mb-0'
                            onClick={() => {
                                window.location.href = `http://localhost:8000/api/download-file/${certificateData.certificate.reference_number}`;
                            }}
                        >
                            Télécharger
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    if(!certificateData){
        return (
            <div>
                <Header />
                <div className='space-y-24'>
                    <div className='bg-red-500 text-center py-8'>
                        <p className='text-white text-2xl font-bold'>Certification Invalide !!!!!!!</p>
                    </div>
        
                    <div className='p-4 md:w-1/2 mx-auto'>
                        <p className='text-xl font-semibold mb-4'>Raisons Possibles :</p>
                        <ol className='list-disc space-y-2 pl-6'>
                            <li>Numéro de Référence ou QR Code incorrect</li>
                            <li>Certification Expirée</li>
                            <li>Fraude Potentielle</li>
                        </ol>
                    </div>
        
                    <div className='flex flex-col md:flex-row justify-between items-center p-4 mb-4'>
                        <button 
                            className='bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mb-2 md:mb-0'
                            onClick={fetchCertificate}
                        >
                            Réessayer
                        </button>
                        <div>
                            <p>Bien vouloir contacter <span className='text-blue-500'>l'émetteur de votre certificat</span></p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default QRcodeNum;