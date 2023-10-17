import React, { useState } from 'react';
import { FormControl, InputLabel, Input } from "@mui/material";

function FormBook({ data, handleClose }) {

  let dataBook = {
    id: '',
    title: '',
    description: '',
    publishDate: '',
  };

  if (data) {
    dataBook = {
      id: data.id,
      title: data.title,
      description: data.description,
      publishDate: data.publishDate,
      pageCount: data.pageCount,
      excerpt: data.excerpt,
    }
  }
  const [formData, setFormData] = useState(dataBook);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose(true, formData);
  };

  return (
    <>
      <h2 id="parent-modal-title">Alterar dados do Livro</h2>
      <form>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="title">Título</InputLabel>
          <Input id="title" name="title" type="text" value={formData.title} onChange={handleInputChange} />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="description">Descrição:</InputLabel>
          <Input id="description" name="description" type="text" value={formData.description} onChange={handleInputChange} />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="publishDate">Data de Publicação</InputLabel>
          <Input type="text" id="publishDate" name="publishDate" value={formData.publishDate} onChange={handleInputChange} />
        </FormControl>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button onClick={handleSubmit} className="btn btn-success btn-lg">Enviar</button>
          <button onClick={() => handleClose(false, null)} className="btn btn-danger btn-lg">Fechar</button>
        </div>
      </form>
    </>
  );
}

export default FormBook;
