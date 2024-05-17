// src/Certifications.js
import React from 'react';

const Certifications = () => {
  const certifications = [
    { name: 'Certification 1', description: 'Description of Certification 1' },
    { name: 'Certification 2', description: 'Description of Certification 2' },
    { name: 'Certification 3', description: 'Description of Certification 3' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">My Certifications</h1>
      </header>
      <main>
        <ul className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">{cert.name}</h2>
              <p className="mt-2 text-gray-600">{cert.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="mt-6 text-center">
        <p className="text-gray-600">&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Certifications;
