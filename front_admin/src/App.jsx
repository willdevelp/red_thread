import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { AuthProvider } from './contexts/AuthContext'
import ReferenceGenerator from './pages/generation'
import Certification from './pages/Certification'
import ViewPDF from './pages/ViewPDF'

function App() {
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/generation" element={<ReferenceGenerator/>} />
                    <Route path="/certification" element={<Certification/>} />
                    <Route path="/view-pdf" element={<ViewPDF/>} />
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
