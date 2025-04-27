import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import '../index.css'

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <Header/>
            <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-500 hover:shadow-3xl">
                <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
                        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-300 rounded-full mix-blend-overlay animate-blob"></div>
                        <div className="absolute bottom-0 left-1/3 w-36 h-36 bg-indigo-300 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg animate-fade-in-down">
                            À propos de CertifSure
                        </h1>
                        <p className="text-center text-lg mt-4 opacity-90 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
                            Votre solution fiable pour la gestion et la certification de documents PDF.
                        </p>
                    </div>
                </header>
                <main className="p-8 space-y-10">
                    <section className="animate-fade-in animation-delay-200">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-100 pb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Notre mission
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Chez <span className="font-bold text-blue-500">CertifSure</span>, notre mission est de fournir une plateforme intuitive et sécurisée pour gérer vos documents numériques.
                            Nous croyons en l'importance de la transparence et de la traçabilité, et nous nous engageons à offrir des outils qui garantissent l'intégrité de vos fichiers.
                        </p>
                    </section>
                    
                    <section className="animate-fade-in animation-delay-300">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-100 pb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Fonctionnalités principales
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Importation et gestion de fichiers PDF.",
                                "Génération automatique de QR codes pour chaque document.",
                                "Création de numéros de référence uniques pour une traçabilité optimale.",
                                "Téléchargement et suppression des fichiers en toute simplicité.",
                                "Interface utilisateur moderne et intuitive.",
                                "Système de sécurité avancé pour protéger vos documents."
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                >
                                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <p className="text-gray-700">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section className="animate-fade-in animation-delay-400">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-100 pb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Pourquoi choisir CertifSure ?
                        </h2>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                CertifSure est conçu pour répondre aux besoins des entreprises et des particuliers qui souhaitent gérer leurs documents de manière efficace et sécurisée.
                                Avec une interface conviviale et des fonctionnalités puissantes, CertifSure est votre partenaire idéal pour la gestion des fichiers PDF.
                            </p>
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { icon: '🔒', text: 'Sécurité maximale' },
                                    { icon: '⚡', text: 'Performance' },
                                    { icon: '🌐', text: 'Accessible partout' },
                                    { icon: '🔄', text: 'Mises à jour régulières' },
                                    { icon: '👨‍💻', text: 'Support réactif' },
                                    { icon: '💡', text: 'Innovation constante' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-2 text-gray-700">
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    
                    <section className="animate-fade-in animation-delay-500">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-100 pb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contactez-nous
                        </h2>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Vous avez des questions ou des suggestions ? Notre équipe est à votre disposition.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:support@certifsure.com" className="text-blue-500 hover:text-blue-700 transition-colors underline">
                                        support@certifsure.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+33 1 23 45 67 89</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Rue de la Technologie, 75000 Paris, France</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
            
            {/* Styles globaux pour les animations */}
            <style jsx global>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.6s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                .animate-blob {
                    animation: blob 7s infinite ease-in-out;
                }
                .animation-delay-100 {
                    animation-delay: 0.1s;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}