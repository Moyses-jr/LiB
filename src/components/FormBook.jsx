import React, { useState } from 'react';
import BooksList from './BooksList';

function FormBook() {

  const handleUpdate = BooksList();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
  });

  // Função para lidar com a alteração nos campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    handleUpdate(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="publishDate">Data de Publicação:</label>
        <input
          type="date"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormBook;
