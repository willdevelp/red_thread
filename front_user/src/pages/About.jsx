import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12">
                {/* Section Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#2E86AB] mb-4">À propos de CertifSure</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Votre solution de confiance pour la gestion et la vérification des certificats
                    </p>
                </div>

                {/* Section Mission */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notre Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        CertifSure s'engage à révolutionner la façon dont les certificats sont gérés et vérifiés. 
                        Notre plateforme offre une solution sécurisée et efficace pour la numérisation, 
                        le stockage et la vérification des certificats, garantissant leur authenticité 
                        et leur accessibilité.
                    </p>
                </div>

                {/* Section Fonctionnalités */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-[#2E86AB] text-4xl mb-4">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sécurité Maximale</h3>
                        <p className="text-gray-600">
                            Protection avancée des certificats avec système de vérification QR code
                            et stockage sécurisé.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-[#2E86AB] text-4xl mb-4">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapidité</h3>
                        <p className="text-gray-600">
                            Vérification instantanée des certificats grâce à notre système 
                            de scan QR code optimisé.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-[#2E86AB] text-4xl mb-4">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Accessibilité</h3>
                        <p className="text-gray-600">
                            Accès facile aux certificats depuis n'importe quel appareil 
                            avec une interface intuitive.
                        </p>
                    </div>
                </div>

                {/* Section Équipe */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notre Équipe</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-[#2E86AB] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                JD
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                                <p className="text-gray-600">Fondateur & CEO</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-[#2E86AB] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                JS
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                                <p className="text-gray-600">Directrice Technique</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Contact */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contactez-nous</h2>
                    <p className="text-gray-600 mb-6">
                        Vous avez des questions ? Notre équipe est là pour vous aider.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <a 
                            href="mailto:contact@certifsure.com"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#2E86AB] text-white rounded-lg hover:bg-[#246B8A] transition duration-300"
                        >
                            <i className="fas fa-envelope mr-2"></i>
                            contact@certifsure.com
                        </a>
                        <a 
                            href="tel:+33123456789"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300"
                        >
                            <i className="fas fa-phone mr-2"></i>
                            +33 1 23 45 67 89
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
