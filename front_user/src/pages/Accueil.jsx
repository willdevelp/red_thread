import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/confident-good-looking-outgoing-nice-dark-skinned-curly-haired-female-friend-suggesting-visit-cozy-cafe-pointing-sideways-inviting-come-smiling-broadly-friendly-vibe-holding-hand-waist-casually.jpg";
import image2 from "../assets/portrait-seriouslooking-determined-young-african-american-guy-with-bristle-cross-hands-chest-looking-confident-ready-action-starting-own-business-stand-white-background.jpg";
import image3 from "../assets/portrait-young-confident-serious-african-american-man-determined-guy-squinting-selfassured-staring-camera-professional-pose-cross-arms-chest-ready-help-white-background.jpg";
import image4 from "../assets/side-view-man-reading-menu-restaurant.jpg";
import image5 from "../assets/tp204-certificate-05.jpg";
import image6 from "../assets/tp204-certificate-14.jpg";
import image7 from "../assets/6976156.jpg";
import image8 from "../assets/grunge_certified_seal_stamp_rubber_look-fotor-bg-remover-20250408181512.png"
import image9 from "../assets/a.png";
import image10 from "../assets/a1.png";
import image11 from "../assets/a2.png";
import image12 from "../assets/a3.png";
import image13 from "../assets/a4.png";
import image14 from "../assets/a5.png";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
// import Footer from "./layout/Footer";

function Accueil() {

    const images = [image1, image2, image3];// Liste des images pour le carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Défilement automatique des images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change d'image toutes les 3 secondes

        return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
    }, [images.length]);

    const imagesCertif = [image5, image6, image7];// Liste des images pour le carousel
    const [currentIndexCertif, setCurrentIndexCertif] = useState(0);
    // Défilement automatique des images

    useEffect(() => {
        const intervalCertif = setInterval(() => {
            setCurrentIndexCertif((prevIndex) =>
                prevIndex === imagesCertif.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change d'image toutes les 3 secondes

        return () => clearInterval(intervalCertif); // Nettoie l'intervalle lors du démontage du composant
    }, [imagesCertif.length]);

    return (
        <div className='bg-[#F2F2F2] px-5'>
            <Header/>
            <div className="lg:flex block justify-between bg-white shadow-lg space-y-3 mt-10 space-x- px-5 py-5">
                <div className=" space-y-5 items-center lg:w-1/2">
                    <p className="text-4xl items-center">Certifiez vos Compétences avec Nous </p>
                    <p className="items-center">
                        Accélérez votre organisation dans l'économie concurrentielle basée
                        sur les compétences, que vous délivriez des diplômes numériques qui
                        ajoutent de la valeur à l'apprentissage ou que vous prépariez votre
                        personnel à l'avenir avec les compétences dont il a besoin.
                    </p>
                </div>

                <div className=" h-96 relative">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                </div>
            </div>

            <div className="lg:flex block justify-between w-full bg-[#2E86AB] p-5 shadow-lg space-y-3">
                <div className="lg:my-auto space-y-16">
                    <div className="">
                        <p className="text-2xl text-white">Vérifier l’authenticité de vos Attestations, 
                        Certifications ou bien d’autres à travers la vérification par QR Cde 
                        et Numéro de Réference
                        </p>
                    </div>
                    <div className="flex space-x-5">
                        <button className="bg-white text-[#2E86AB] px-4 py-2 rounded"><Link to="/qrcode">QR Code</Link></button>
                        <button className="bg-white text-[#2E86AB] px-4 py-2 rounded"><Link to="/ref">N° de Réference</Link></button>
                    </div>
                </div>
                <img src={image4} alt="" className="rounded lg:w-2/5"/>
            </div>

            <div className="space-y-5 py-3">
                    <p className="text-3xl text-center font-bold">Nos Certifications</p>
                    <div className=" relative mx-auto lg:w-1/2 ">
                        <img
                            src={imagesCertif[currentIndexCertif]}
                            alt={`Slide ${currentIndexCertif + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />

                       {/* Superposition de l'image 8 */}
                        <img
                            src={image8}
                            alt="Overlay"
                            className="absolute top-4 right-4 w-32 h-32"
                        />
                    </div>
            </div>

            <div className="bg-[#2E86AB] p-5 shadow-lg space-y-8">
                <p className="text-3xl text-white text-center ">Pourquoi CertifSure ?</p>
                <p className="text-white w-1/2 text-center mx-auto">CertifSure est la réference en termes d’authentification 
                de documments avec plus de 4000 authentification ainsi qu’une collarboration avec 
                plusieurs entreprises pour 
                pouvoir faciliter l’authentification et ainsi réduire les fraudes</p>
            </div>

            <div className="bg-white p-5">
                <p className="text-2xl font-bold text-center">Nos Partenaires</p>
                <div className="lg:flex block justify-around mt-10 space-y-2">
                    <img src={image9} alt="Partenaire 1" className="mx-auto lg:w-32 lg:h-32"/>
                    <img src={image10} alt="Partenaire 1" className="mx-auto lg:w-32 lg:h-32"/>
                    <img src={image11} alt="Partenaire 1" className="mx-auto lg:w-32 lg:h-32"/>
                    <img src={image12} alt="Partenaire 1" className="mx-auto lg:w-32 lg:h-32"/>
                    <img src={image13} alt="Partenaire 1" className="mx-auto lg:w-32 lg:h-32"/>
                    <img src={image14} alt="Partenaire 1" className="mx-auto lg:w-32 lg:h-32"/>
                </div>
            </div>


            <div className="">
                <p className="text-2xl font-bold text-center py-5">Statistiques</p>
                <div className="lg:flex block space-y-3 justify-between space-x-3">
                    <div className="bg-[#2E86AB] p-5 rounded-sm shadow-md space-y-3">
                        <p className="text-center text-xl font-bold text-white">Nombre d'Attestations</p>
                        <p className="text-center text-2xl text-white">1000</p>
                    </div>
                    <div className=" bg-[#2E86AB] p-5 rounded-sm shadow-md space-y-3">
                        <p className="text-center text-xl font-bold text-white">Nombre de Certifications</p>
                        <p className="text-center text-2xl text-white">500</p>
                    </div>
                    <div className=" bg-[#2E86AB] p-5 rounded-sm shadow-md space-y-3">
                        <p className="text-center text-xl font-bold text-white">Nombre de Vérifications</p>
                        <p className="text-center text-2xl text-white">2000</p>
                    </div>
                    <div className=" bg-[#2E86AB] p-5 rounded-sm shadow-md space-y-3">
                        <p className="text-center text-xl font-bold text-white">Nombre d'Utilisateurs</p>
                        <p className="text-center text-2xl text-white">1500</p>
                    </div>
                </div>
            </div>

            {/* <Footer/> */}
            <Footer/>
        </div>
    )
}

export default Accueil
