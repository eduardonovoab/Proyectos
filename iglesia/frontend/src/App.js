import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Actualiza esta línea
import BaptismForm from './pages/BaptismForm';
import MarriageForm from './pages/MarriageForm';
import CatechesisForm from './pages/CatechesisForm';
import ConfirmationForm from './pages/ConfirmationForm';
import CertificateHistory from './pages/CertificateHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baptism" element={<BaptismForm />} />
        <Route path="/marriage" element={<MarriageForm />} />
        <Route path="/catechesis" element={<CatechesisForm />} />
        <Route path="/confirmation" element={<ConfirmationForm />} />
        <Route path="/history" element={<CertificateHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
