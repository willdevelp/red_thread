import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                phone,
                password,
                password_confirmation
            })
            console.log(response.data)
            navigate('/dashboard')
        } catch (error) {
            if (error.response.status === 422) {
                console.log('Erreurs de validation:', error.response.data.errors);
                
            }

        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom de l'entreprise :
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Telephone :
                    </label>
                    <input
                        id="phone"
                        type="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Votre Telephone"
                        className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Mot de passe
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

                <div>
                    <label htmlFor="passwordconfirm" className="block text-sm font-medium text-gray-700">
                        Confirmer le Mot de passe
                    </label>
                    <input
                        id="passwordconfirm"
                        type="password"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="Votre mot de passe"
                        className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className=" bg-[#2E86AB] p-2 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Inscription
                </button>
                <p>Déjà un compte ?  <Link to="/" className="text-sky-400 hover:underline hover:text-blue-900">Connectez-Vous !</Link></p>
            </form>
            </div>
        </div>
    )
}

export default Register
