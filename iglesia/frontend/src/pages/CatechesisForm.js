import React, { useState } from 'react';

const CatechesisForm = () => {
  const [formData, setFormData] = useState({
    bookNumber: '',
    pageNumber: '',
    date: '',
    catechumenName: '',
    run: '',
    birthDate: '',
    birthPlace: '',
    fatherName: '',
    motherName: '',
    godparents: '',
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
      <h1>Formulario de Certificado de Catequesis</h1>
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
          <label>Fecha del bautizo:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Nombre del catecúmeno:</label>
          <input type="text" name="catechumenName" value={formData.catechumenName} onChange={handleChange} required />
        </div>
        <div>
          <label>RUN del catecúmeno:</label>
          <input type="text" name="run" value={formData.run} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha de nacimiento del catecúmeno:</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Lugar de nacimiento del catecúmeno:</label>
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
          <input type="text" name="godparents" value={formData.godparents} onChange={handleChange} required />
        </div>
        <div>
          <label>Quien certifica:</label>
          <input type="text" name="certifier" value={formData.certifier} onChange={handleChange} required />
        </div>
        <div>
          <label>Nota adicional:</label>
          <input type="text" name="note" />
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

export default CatechesisForm;
