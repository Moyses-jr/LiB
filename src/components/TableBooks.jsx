import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ModalBook from "./Modal";
import ModalSearch from "./ModalSearch";


function TableBooks() {
    const [books, setBooks] = useState([]);
    const [idBook, setIdBook] = useState(null);

    useEffect(() => {
        axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books`)
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
            });
    }, []);

    // const handleSearch = (id) => {
    //     setIdBook(id)
    // };

    const handleDelete = async (id) => {
        const deleteBooks = books.filter(book => book.id !== id);
        setBooks(deleteBooks);

        try {
            const response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
            console.log(`Livro com ID ${id} foi excluído com sucesso.`);

        } catch (error) {
            console.error(`Erro ao excluir o livro com ID ${id}:`, error);
        }
    };

    const [show, setShow] = React.useState(false);

    const handleShow = (id) => {
        setShow(true);
        setIdBook(id)
    };

    const handleClose = () => {
        setShow(false);
        setIdBook(null)
    };

    // const handleInsert = async (dataBook) => {
    //     try {
    //         const response = await axios.post(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
    //         console.log('Inserção bem-sucedida:', response.data);
    //     } catch (error) {
    //         console.error('Erro na inserção:', error);
    //     }
    // };
    return (
        <div>
            <h2>Lista de Livros</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data de Publicação</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id} onClick={() => handleShow(book.id)}>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.publishDate}</td>
                            <td>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button onClick={() => handleDelete(book.id)} className="btn btn-primary"><DeleteIcon /></button>
                                    <ModalBook dataBook={book} books={books} setBooks={setBooks} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalSearch searchId={idBook} show={show} handleClose={handleClose}/>
        </div>
    );
}

export default TableBooks;
