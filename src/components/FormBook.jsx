import React, { useState } from 'react';
import BooksList from './BooksList';
import { FormControl, InputLabel, Input, Button, } from "@mui/material";

function FormBook() {
  const handleUpdate = BooksList();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="title">Título</InputLabel>
        <Input id="title" name="title" type="text" value={formData.title} onChange={handleInputChange} />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="description">Descrição:</InputLabel>
        <Input id="description" name="description" type="text" value={formData.description} onChange={handleInputChange} />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <label>Data de Publicação</label>
        <Input type="date" id="publishDate" name="publishDate" value={formData.publishDate} onChange={handleInputChange} />
      </FormControl>
    </form>
  );
}

export default FormBook;
