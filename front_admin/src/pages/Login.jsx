import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            })
            console.log(response.data)
            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
            <div className="flex items-center justify-center min-h-screen bg-blue-50">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email :
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Votre email"
                                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe :
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Votre mot de passe"
                                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                    Se souvenir de moi
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                                Mot de passe oublié ?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="p-2 bg-[#2E86AB] text-white rounded"
                        >
                            Connexion
                        </button>
                        <p>Pas encore de compte ? <Link to="/register" className="text-sky-400 hover:underline hover:text-blue-900">Inscrivez-vous !</Link></p>
                    </form>
                </div>
            </div>
    )
}

export default Login
