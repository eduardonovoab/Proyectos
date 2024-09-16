import React, { useState } from 'react';
import axios from 'axios';

const CertificateHistory = () => {
  const [run, setRun] = useState('');
  const [certificates, setCertificates] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/certificates/search?run=${run}`);
      setCertificates(response.data);
    } catch (error) {
      console.error('Error al buscar certificados', error);
    }
  };

  return (
    <div>
      <h1>Historial de Certificados</h1>
      <form onSubmit={handleSearch}>
        <div>
          <label>Buscar por RUN:</label>
          <input
            type="text"
            value={run}
            onChange={(e) => setRun(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar</button>
      </form>

      {certificates.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
            {certificates.map((certificate) => (
              <li key={certificate.id}>
                {certificate.confirmandName} - {certificate.run} - {certificate.issueDate}
                {/* Muestra otros campos según sea necesario */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CertificateHistory;
