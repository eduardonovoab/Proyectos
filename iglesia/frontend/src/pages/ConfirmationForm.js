import React, { useState } from 'react';

const ConfirmationForm = () => {
  const [formData, setFormData] = useState({
    bookNumber: '',
    pageNumber: '',
    confirmationDate: '',
    confirmandName: '',
    run: '',
    birthDate: '',
    birthPlace: '',
    fatherName: '',
    motherName: '',
    sponsor: '',
    certifier: '',
    note: '',
    issueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos del formulario, por ejemplo, enviarlos a tu backend
    console.log(formData);
  };

  return (
    <div>
      <h1>Formulario de Certificado de Confirmación</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número del libro:</label>
          <input type="text" name="bookNumber" value={formData.bookNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Número de la página:</label>
          <input type="text" name="pageNumber" value={formData.pageNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha de la confirmación:</label>
          <input type="date" name="confirmationDate" value={formData.confirmationDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Nombre del confirmado:</label>
          <input type="text" name="confirmandName" value={formData.confirmandName} onChange={handleChange} required />
        </div>
        <div>
          <label>RUN del confirmado:</label>
          <input type="text" name="run" value={formData.run} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha de nacimiento del confirmado:</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Lugar de nacimiento del confirmado:</label>
          <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleChange} required />
        </div>
        <div>
          <label>Nombre del padre:</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
        <div>
          <label>Nombre de la madre:</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
        </div>
        <div>
          <label>Padrinos:</label>
          <input type="text" name="sponsor" value={formData.sponsor} onChange={handleChange} required />
        </div>
        <div>
          <label>Quien certifica:</label>
          <input type="text" name="certifier" value={formData.certifier} onChange={handleChange} required />
        </div>
        <div>
          <label>Nota adicional:</label>
          <input type="text" name="note" value={formData.note} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de emisión del certificado:</label>
          <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ConfirmationForm;
