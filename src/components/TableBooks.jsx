import React from "react";
import BooksList from "./BooksList";
import 'bootstrap/dist/css/bootstrap.min.css';


function TableBooks() {
    const { books, handleDelete, handleUpdate } = BooksList();

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
                                <button onClick={() => handleDelete(book.id)}>Delete</button>
                                <button onClick={() => showModal(book)}>Alterar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableBooks;
