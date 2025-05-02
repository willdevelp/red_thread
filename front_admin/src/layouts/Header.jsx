import React from 'react';
import image1 from '../assets/team5.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="flex flex-wrap items-center justify-between bg-[#2E86AB] text-white px-3 lg:px-5 py-2">
            {/* Logo */}
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-0">CertifSure</h1>

            {/* Navigation Links */}
            <div className="flex space-x-3 md:space-x-5 text-sm md:text-base">
                <Link to="/dashboard" className="hover:underline">
                    Dashboard
                </Link>
                <Link to="/certification" className="hover:underline">
                    Certificats
                </Link>
                <Link to="/profile" className="hover:underline">
                    Mon Profil
                </Link>
            </div>

            {/* Profile Image */}
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={image1} alt="Profile" />
            </div>
        </div>
    );
}

export default Header;