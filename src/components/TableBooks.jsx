import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import Search from '@mui/icons-material/Search';
import ModalBook from "./Modal";
import ModalSearch from "./ModalSearch";


function TableBooks() {
    const [books, setBooks] = useState([]);
    const [oneBook, setOneBook] = useState([]);
    const [show, setShow] = React.useState(false);

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
        const deleteBooks = books.filter(book => book.id !== id);
        setBooks(deleteBooks);

        try {
            await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
            console.log(`Livro com ID ${id} foi excluído com sucesso.`);

        } catch (error) {
            console.error(`Erro ao excluir o livro com ID ${id}:`, error);
        }
    };

    const handleShow = (book) => {
        setShow(true);
        setOneBook(book)
    };

    const handleClose = () => {
        setShow(false);
        setOneBook(null)
    };

    return (
        <div className="content" >
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Títulos</th>
                        <th>Descrições</th>
                        <th>Data de Publicações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.publishDate}</td>
                            <td>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button onClick={() => handleDelete(book.id)} className="btn btn-primary"><DeleteIcon /></button>
                                    <ModalBook dataBook={book} books={books} setBooks={setBooks} />
                                    <button onClick={() => handleShow(book)} className="btn btn-primary"><Search /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalSearch oneBook={oneBook} show={show} handleClose={handleClose}/>
        </div>
    );
}

export default TableBooks;
