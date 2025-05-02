import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 via-gray-50 to-white bg-fixed bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <Header />
            <main className="flex-grow p-6 bg-gray-100">
                <div className="max-w-5xl mx-auto px-5 rounded-3xl shadow-2xl p-10 space-y-16 animate-fade-in">

                    {/* Titre principal */}
                    <div className="text-center space-y-2">
                        <p className="text-sm tracking-widest uppercase text-blue-400">
                            Bienvenue chez CertifSure
                        </p>
                        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-md">
                            À propos de CertifSure
                        </h1>
                        <p className="text-gray-600 text-lg mt-2">
                            Votre solution fiable pour la gestion et la certification de documents PDF.
                        </p>
                    </div>

                    <div className="space-y-16">

                        {/* Notre mission */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-200 pb-2">
                                Notre mission
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Chez <span className="font-semibold text-blue-500">CertifSure</span>, nous vous aidons à protéger l'authenticité de vos documents numériques
                                avec transparence, traçabilité et sécurité.
                            </p>
                        </section>

                        {/* Fonctionnalités principales */}
                        <section className="space-y-12">
                            <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-200">
                                Fonctionnalités principales
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded">
                                {[
                                    "Importation et gestion de fichiers PDF",
                                    "Génération de QR codes pour chaque document",
                                    "Création de numéros de référence uniques",
                                    "Téléchargement et suppression simplifiés",
                                ].map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                    >
                                        <span className="text-blue-500 text-4xl">✅</span>
                                        <p className="text-gray-700 text-lg">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Pourquoi choisir CertifSure */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-200 pb-2">
                                Pourquoi choisir CertifSure ?
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                CertifSure vous permet de gérer et protéger vos documents numériques efficacement,
                                avec une interface moderne et sécurisée adaptée à tous les utilisateurs.
                            </p>
                        </section>

                        {/* Contactez-nous */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-200 pb-2">
                                Contactez-nous
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Pour toute question ou suggestion, contactez-nous à :
                                <a
                                    href="mailto:support@certifsure.com"
                                    className="text-blue-500 underline ml-1 hover:text-blue-700 transition-colors"
                                >
                                    support@certifsure.com
                                </a>.
                            </p>
                        </section>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
