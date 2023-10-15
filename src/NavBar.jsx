import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TypoGraphy from '@mui/material/Typography';

import { Link } from "react-router-dom";

import { Home, AccountBox } from '@mui/icons-material';

function NavBar() {
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        <Link className='' style={{textDecoration: "none", color:"white"}} to="/tableBooks"><Home />Página Incial</Link>
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        <Link style={{textDecoration: "none", color:"white"}} to="/insertBook"><AccountBox />Inserir Livro</Link>
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}
export default NavBar;
