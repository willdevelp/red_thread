import React from 'react'
import image1 from '../assets/team5.jpg'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='flex justify-between bg-[#2E86AB] text-white px-3 lg:px-5 py-1 items-center md:justify-between md:px-2'>
                <h1 className='text-4xl mb-2 font-bold'>CertifSure</h1>

                <div className='flex space-x-5'>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/certification">Certificats</Link>
                </div>

            <div className="w-8 h-8 rounded-full overflow-hidden md:w-12 md:h-12">
                <img className='w-full h-full ' src={image1} alt="" />
            </div>
        </div>
    )
}

export default Header
