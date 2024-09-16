import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    axios.get('/api/certificates')
      .then(response => {
        setCertificates(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the certificates!', error);
      });
  }, []);

  return (
    <div>
      <h1>Certificates</h1>
      <ul>
        {certificates.map(certificate => (
          <li key={certificate.id}>{certificate.name} - {certificate.type} - {new Date(certificate.dateIssued).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;
