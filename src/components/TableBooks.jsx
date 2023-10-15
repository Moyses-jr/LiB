import React from "react";
import BooksList from "./BooksList";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ChangeCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { Button } from "@mui/material";
import { Button } from 'react-bootstrap';
import ModalBook from "./Modal";


function TableBooks() {
    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const { books, handleDelete } = BooksList();

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
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.publishDate}</td>
                            <td>
                                <Button onClick={() => handleDelete(book.id)}>
                                    <DeleteIcon />
                                </Button>
                                <Button onClick={handleShow}>
                                    <ChangeCircle />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalBook open={show} handleShow={handleShow}/>
        </div>
    );
}

export default TableBooks;
