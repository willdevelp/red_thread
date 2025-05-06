import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/confident-good-looking-outgoing-nice-dark-skinned-curly-haired-female-friend-suggesting-visit-cozy-cafe-pointing-sideways-inviting-come-smiling-broadly-friendly-vibe-holding-hand-waist-casually.jpg";
import image2 from "../assets/portrait-seriouslooking-determined-young-african-american-guy-with-bristle-cross-hands-chest-looking-confident-ready-action-starting-own-business-stand-white-background.jpg";
import image3 from "../assets/portrait-young-confident-serious-african-american-man-determined-guy-squinting-selfassured-staring-camera-professional-pose-cross-arms-chest-ready-help-white-background.jpg";
import image4 from "../assets/side-view-man-reading-menu-restaurant.jpg";
import image5 from "../assets/tp204-certificate-05.jpg";
import image6 from "../assets/tp204-certificate-14.jpg";
import image7 from "../assets/6976156.jpg";
import image8 from "../assets/grunge_certified_seal_stamp_rubber_look-fotor-bg-remover-20250408181512.png";
import image9 from "../assets/a.png";
import image10 from "../assets/a1.png";
import image11 from "../assets/a2.png";
import image12 from "../assets/a3.png";
import image13 from "../assets/a4.png";
import image14 from "../assets/a5.png";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function Accueil() {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const imagesCertif = [image5, image6, image7];
    const [currentIndexCertif, setCurrentIndexCertif] = useState(0);

    useEffect(() => {
        const intervalCertif = setInterval(() => {
            setCurrentIndexCertif((prevIndex) =>
                prevIndex === imagesCertif.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(intervalCertif);
    }, [imagesCertif.length]);

    return (
        <div className="bg-gray-50">
            <Header />
            <div className="lg:flex block justify-between bg-white shadow-lg px-8 py-5">
                <div className="space-y-6 lg:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Certifiez vos Compétences avec Nous
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        Accélérez votre organisation dans l'économie concurrentielle basée
                        sur les compétences, que vous délivriez des diplômes numériques qui
                        ajoutent de la valeur à l'apprentissage ou que vous prépariez votre
                        personnel à l'avenir avec les compétences dont il a besoin.
                    </p>
                </div>
                <div className="h-96 relative  overflow-hidden shadow-md">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                </div>
            </div>

            <div className="lg:flex block justify-between w-full bg-[#2E86AB] p-8 shadow-lg space-y-6 space-x-5">
                <div className="lg:my-auto space-y-8 text-white">
                    <h2 className="text-2xl font-semibold">
                        Vérifiez l’authenticité de vos Attestations, Certifications ou bien d’autres
                    </h2>
                    <p>
                        Utilisez la vérification par QR Code ou Numéro de Référence pour garantir
                        l'authenticité de vos documents.
                    </p>
                    <div className="flex space-x-5">
                        <Link to="/qrcode">
                            <button className="bg-white text-blue-600 px-6 py-3  shadow hover:bg-gray-100 transition">
                                QR Code
                            </button>
                        </Link>
                        <Link to="/ref">
                            <button className="bg-white text-blue-600 px-6 py-3  shadow hover:bg-gray-100 transition">
                                N° de Référence
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={image4} alt="" className=" lg:w-2/5 shadow-md" />
            </div>

            <div className="space-y-8 py-8 shadow-lg">
                <h2 className="text-3xl text-center font-bold text-gray-800">Nos Certifications</h2>
                <div className="relative mx-auto lg:w-1/2  overflow-hidden shadow-md">
                    <img
                        src={imagesCertif[currentIndexCertif]}
                        alt={`Slide ${currentIndexCertif + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <img
                        src={image8}
                        alt="Overlay"
                        className="absolute top-4 right-4 w-24 h-24"
                    />
                </div>
            </div>

            <div className="bg-[#2E86AB] p-8 shadow-lg space-y-8">
                <h2 className="text-3xl text-white text-center font-bold">Pourquoi CertifSure ?</h2>
                <p className="text-white text-center text-xl max-w-3xl mx-auto leading-relaxed">
                    CertifSure est la réference en termes d’authentification 
                    de documments avec plus de 4000 authentification ainsi qu’une collarboration avec 
                    plusieurs entreprises pour 
                    pouvoir faciliter l’authentification et ainsi réduire les fraudes
                </p>
            </div>

            <div className="bg-white p-8 space-y-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 py-5">Statistiques</h2>
                <div className="lg:flex block space-y-6 lg:space-y-0 justify-between space-x-6">
                    {[
                        { title: "Nombre d'Attestations", value: 1000 },
                        { title: "Nombre de Certifications", value: 500 },
                        { title: "Nombre de Vérifications", value: 2000 },
                        { title: "Nombre d'Utilisateurs", value: 1500 },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#2E86AB] p-6  shadow-md text-white text-center space-y-3"
                        >
                            <p className="text-xl font-bold">{stat.title}</p>
                            <p className="text-2xl">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-8 shadow-lg space-y-8">
                <h2 className="text-2xl font-bold text-center text-white bg-[#2E86AB] w-full py-5">Nos Partenaires</h2>
                <div className="lg:flex block justify-around mt-10 space-y-6 lg:space-y-0">
                    {[image9, image10, image11, image12, image13, image14].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Partenaire ${index + 1}`}
                            className="mx-auto lg:w-32 lg:h-32"
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Accueil;
