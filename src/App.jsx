import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormBook from './components/FormBook'
import TableBooks from './components/TableBooks'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit"> Bibloteca IF </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="tableBooks" element={<TableBooks />} />
        <Route path="insertBook" element={<FormBook />} />
        <Route path="*" element={<TableBooks />} />
      </Routes>
    </>
  )
}

export default App
