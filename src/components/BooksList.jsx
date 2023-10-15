import { useEffect, useState } from "react";
import axios from "axios";

export default function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books`)
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        // Crie uma nova lista de livros excluindo o livro com o ID especificado
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);

        try {
            const response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
            console.log(`Livro com ID ${id} foi excluído com sucesso.`);

        } catch(error){
            console.error(`Erro ao excluir o livro com ID ${id}:`, error);
        }
    };

    const handleInsert = async (dataBook) => {

        try {
            const response = await axios.post(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
            console.log('Inserção bem-sucedida:', response.data);
        } catch (error) {
            console.error('Erro na inserção:', error);
        }
    };

    const handleUpdate = async (dataBook) => {
        try {
            // Faça uma solicitação PUT para a API para atualizar os dados
            const response = await axios.put('/api/update', formData);
            console.log('Atualização bem-sucedida:', response.data);
        } catch (error) {
            console.error('Erro na atualização:', error);
        }
    };

    return { books, handleDelete, handleUpdate , handleInsert};
}