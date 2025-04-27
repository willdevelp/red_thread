import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-[#2E86AB] text-white shadow-md py-2">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-200">
                        CertifSure
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="space-x- space-x-5">
                    <Link
                        to="/"
                        className="text-lg hover:text-gray-200 transition duration-300"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/qrcode"
                        className="text-lg hover:text-gray-200 transition duration-300"
                    >
                        Qr Code
                    </Link>
                    <Link
                        to="/ref"
                        className="text-lg hover:text-gray-200 transition duration-300"
                    >
                        N° de Référence
                    </Link>
                    <Link
                        to="/certifsure"
                        className="text-lg hover:text-gray-200 transition duration-300"
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}