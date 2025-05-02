import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#2E86AB] text-white shadow-md py-3">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-200">
                        CertifSure
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6">
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
                        to="/about"
                        className="text-lg hover:text-gray-200 transition duration-300"
                    >
                        A Propos
                    </Link>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#2E86AB] text-white shadow-md">
                    <nav className="flex flex-col space-y-4 py-4 px-4">
                        <Link
                            to="/"
                            className="text-lg hover:text-gray-200 transition duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            to="/qrcode"
                            className="text-lg hover:text-gray-200 transition duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Qr Code
                        </Link>
                        <Link
                            to="/ref"
                            className="text-lg hover:text-gray-200 transition duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            N° de Référence
                        </Link>
                        <Link
                            to="/about"
                            className="text-lg hover:text-gray-200 transition duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            A Propos
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}