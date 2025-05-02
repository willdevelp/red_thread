import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="h-screen w-full bg-blue-500 text-white">²
            <nav className="mt-10">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `block py-2.5 px-4 rounded transition duration-200 ${
                            isActive ? 'bg-blue-800' : 'hover:bg-blue-700'
                        }`
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/certificates"
                    className={({ isActive }) =>
                        `block py-2.5 px-4 rounded transition duration-200 ${
                            isActive ? 'bg-blue-800' : 'hover:bg-blue-700'
                        }`
                    }
                >
                    Certificats
                </NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;