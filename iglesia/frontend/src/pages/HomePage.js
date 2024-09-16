import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Certificados</h1>
      <nav>
        <ul>
          <li><Link to="/baptism">Bautizo</Link></li>
          <li><Link to="/marriage">Matrimonio</Link></li>
          <li><Link to="/catechesis">Catequesis</Link></li>
          <li><Link to="/confirmation">Confirmación</Link></li>
          <li><Link to="/history">Certificados</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
