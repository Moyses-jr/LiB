import React from "react";

function ShowBook({book, handleClose}) {

    return(
        <div>
            <h1>{book}</h1>
            <button onClick={handleClose} className="btn btn-danger btn-lg">Fechar</button>
        </div>
    );
    
}

export default ShowBook;