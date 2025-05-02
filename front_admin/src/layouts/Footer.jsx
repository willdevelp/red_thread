import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#2E86AB] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo & Description */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">CertiSure</h2>
                        <p className="text-white">
                            Vérifiez l'authenticité de vos certifications en ligne.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div className="grid grid-cols-2 gap-8 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Liens</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-white hover:text-white">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/certification" className="text-white hover:text-white">
                                        Certficats
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Légal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/privacy" className="text-white hover:text-white">
                                        Confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="text-white hover:text-white">
                                        Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Réseaux sociaux */}
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/votreprojet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white text-2xl"
                        >
                        <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/votrecompte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white text-2xl"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-white">
                    <p>© {new Date().getFullYear()} CertiSure. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer