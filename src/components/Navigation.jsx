import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }
            }
        >
            <Link to="/tableBooks">Página Incial</Link> | 
            <Link to="/insertBook"> Inserir Livro</Link>
        </nav >
    );
}

export default Navigation;