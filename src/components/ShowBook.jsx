function ShowBook({ oneBook, handleClose }) {
    
    const { title, description, excerpt, pageCount, publishDate } = oneBook;

    return (
        <div>
            <h1>Dados do Livro</h1>
            {oneBook ? (
                <>
                    <p><b>Título:</b> {title}</p>
                    <p><b>Descrição:</b> {description}</p>
                    <p><b>Resumo:</b> {excerpt}</p>
                    <p><b>Número de páginas:</b> {pageCount}</p>
                    <p><b>Data de Publicação:</b> {publishDate}</p>
                </>
            ) : (
                <p>Carregando dados...</p>
            )}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={handleClose} className="btn btn-danger btn-lg">Fechar</button>
            </div>
        </div>
    );
}

export default ShowBook;