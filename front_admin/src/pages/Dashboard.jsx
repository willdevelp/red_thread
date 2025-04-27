import React from 'react'
import Header from '../layouts/Header'
// import Footer from '../layouts/Footer'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChat'

function Dashboard() {
    return (
        <>
            <Header />
            <div className="bg-gray-100 px-5 space-y-5">
                <h1 className='text-3xl font-bold'>Bienvenue ! </h1>

                <div className='space-y-3'>
                    <p className='text-xl font-bold'>Dashboard</p>
                    <div className='lg:flex justify-between space-y-5'>
                        <BarChart />
                        <PieChart />
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold'>Listes des derniers scans </h1>

                    <table>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Dashboard
