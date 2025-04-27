import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo & Description */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">CertiSure</h2>
                        <p className="text-gray-400">
                            Vérifiez l'authenticité de vos certifications en ligne.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div className="grid grid-cols-2 gap-8 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Liens</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-gray-400 hover:text-white">
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/qrcode" className="text-gray-400 hover:text-white">
                                        QR code
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ref" className="text-gray-400 hover:text-white">
                                        Numéro de Reference
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-gray-400 hover:text-white">
                                        A Propos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Légal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/privacy" className="text-gray-400 hover:text-white">
                                        Confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="text-gray-400 hover:text-white">
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
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                        <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/votrecompte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} CertiCheck. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer