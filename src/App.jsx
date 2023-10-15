import Navigation from './components/Navigation'
// import reactLogo from './assets/react.svg'
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormBook from './components/FormBook'
import TableBooks from './components/TableBooks'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="tableBooks" element={<TableBooks />} />
        <Route path="insertBook" element={<FormBook  />} />
        <Route path="*" element={<TableBooks />} />
      </Routes>
    </>
  )
}

export default App
