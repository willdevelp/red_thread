import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState({
        name: '',
        email: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Fonction pour récupérer les informations de l'utilisateur
    const fetchUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.data.success) {
                setUser(response.data.user);
            } else {
                setError('Impossible de récupérer les informations utilisateur');
            }
        } catch (err) {
            setError('Erreur de communication avec le serveur');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Fonction pour mettre à jour les informations de l'utilisateur
    const handleUpdate = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.put(
                'http://localhost:8000/api/user/update',
                user,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if (response.data.success) {
                setSuccess('Informations mises à jour avec succès');
            } else {
                setError('Erreur lors de la mise à jour des informations');
            }
        } catch (err) {
            setError('Erreur de communication avec le serveur');
            console.error(err);
        }
    };

    // Charger les informations utilisateur au montage du composant
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>
            {loading ? (
                <p>Chargement des informations...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Nom</label>
                        <input
                            type="text"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled // L'email est souvent non modifiable
                        />
                    </div>
                    {success && <p className="text-green-500 mb-4">{success}</p>}
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Mettre à jour
                    </button>
                </form>
            )}
        </div>
    );
}

export default Profile;