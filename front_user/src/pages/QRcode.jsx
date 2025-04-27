import React, { useState, useRef, useEffect } from 'react';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';
import '../index.css';

function QRcode() {
    const [scanResult, setScanResult] = useState(null);
    const [error, setError] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const scannerRef = useRef(null);

    useEffect(() => {
        if (!scannerRef.current && !scanResult && !error) {
            const scanner = new Html5QrcodeScanner(
                'reader',
                {
                    qrbox: { width: 250, height: 250 },
                    fps: 5,
                },
                false
            );

            scanner.render(
                (result) => {
                    scanner.clear();
                    setScanResult(result);
                    setIsScanning(false);
                },
                (error) => {
                    if (error !== 'NotReadableError') {
                        setError(error.message || 'Erreur lors du scan');
                    }
                }
            );

            scannerRef.current = scanner;
            setIsScanning(true);
        }

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear();
                scannerRef.current = null;
            }
        };
    }, [scanResult, error]);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setScanResult(null);
        setError(null);
        setIsScanning(true);

        try {
            const html5QrCode = new Html5Qrcode('reader');
            const result = await html5QrCode.scanFile(selectedFile, false);
            setScanResult(result);
        } catch (err) {
            setError(
                'Impossible de lire le QR code. Vérifiez que l\'image contient bien un QR code valide.',
                err
            );
        } finally {
            setIsScanning(false);
        }
    };

    const resetScanner = () => {
        setScanResult(null);
        setError(null);
        setIsScanning(false);
        if (scannerRef.current) {
            scannerRef.current.clear();
            scannerRef.current = null;
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-lg shadow-md">
            <div className="bg-[#2E86AB] p-5">
                <h2 className="text-xl font-bold mb-4 text-center text-white">Scanner QR Code</h2>
            </div>

            <div className="mb-4">
                <div id="reader" className="w-full h-64 border-2 border-gray-300 rounded-lg"></div>
            </div>

            {isScanning && (
                <div className="flex justify-center items-center mb-4">
                    <p className="text-blue-600 font-medium">Scanning en cours...</p>
                </div>
            )}

            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Importer une image contenant un QR code
                </label>
                <div className="flex justify-between items-center gap-2">
                    <input
                        type="file"
                        accept="pdf/*"
                        placeholder="Importer"
                        onChange={handleFileChange}
                        className="block text-sm text-gray-500 border
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                    />
                    {scanResult && (
                        <button
                            onClick={resetScanner}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                        >
                            Réinitialiser
                        </button>
                    )}
                </div>
            </div>

            {scanResult && (
                <div className="p-4 bg-green-50 rounded-lg mb-4">
                    <h3 className="font-bold text-green-800">Résultat du scan :</h3>
                    <p className="mt-2 text-green-600 break-all">{scanResult}</p>

                    <div className="bg-blue-700 p-5">
                        <p className="text-3xl text-center bg-green-200">Certification Valide !!!</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-50 rounded-lg mb-4">
                    <h3 className="font-bold text-red-800">Erreur :</h3>
                    <p className="mt-2 text-red-600">{error}</p>
                </div>
            )}
        </div>
    );
}

export default QRcode;