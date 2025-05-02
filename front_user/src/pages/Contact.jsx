import React, { useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setSuccessMessage('Votre message a été envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 space-y-2">
        <Header/>
      <div className="lg:flex justify-between space-x-3 px-5 ">

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="space-y-4 lg:w-1/2 border border-gray-100 rounded p-2">
          <div>
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Contactez-nous</h1><br />
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold bg-[#2E86AB] text-white rounded text-xl"
          >
            Envoyer
          </button>
        </form>

        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}

        {/* Section FAQ */}
        <div className="mt-10 w-full border h-128 my-auto p-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Comment puis-je importer un fichier PDF ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez importer un fichier PDF en utilisant le formulaire d'importation sur la page principale. Cliquez sur "Ajouter" pour sélectionner vos fichiers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Où puis-je trouver mes fichiers traités ?
              </h3>
              <p className="text-gray-600">
                Une fois vos fichiers traités, vous pouvez les télécharger depuis la section "Résultats" sur la page principale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Comment puis-je supprimer un fichier ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez supprimer un fichier en cliquant sur le bouton "Supprimer" à côté du fichier dans la liste des résultats.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Qui puis-je contacter pour obtenir de l'aide ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez nous contacter via ce formulaire ou envoyer un email à 
                <a href="mailto:support@certifsure.com" className="text-blue-500 underline"> support@certifsure.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}