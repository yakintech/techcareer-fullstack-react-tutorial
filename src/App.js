import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SupplierPage from './pages/SupplierPage'
import SupplierDetail from './pages/SupplierDetail'
import AddSupplier from './formSample/AddSupplier'
import Intro from './muiSample/Intro'
import GridSample from './muiSample/GridSample'
import { DataGrid } from '@mui/x-data-grid'
import DataGridSample from './muiSample/DataGridSample'

function App() {
  return (<>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/addsupplier'>Add supplier</Link></li>
      <li><Link to='/muisample'>MUI Sample</Link></li>
      <li><Link to='/grid'>MUI Grid </Link></li>
      <li><Link to='/datagrid'>Data Grid </Link></li>




    </ul>

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/suppliers' element={<SupplierPage/>} />
        <Route path='/suppliers/:id' element={<SupplierDetail/>} />
        <Route path='/addsupplier' element={<AddSupplier/>} />
        <Route path='/muisample' element={<Intro/>} />
        <Route path='/grid' element={<GridSample/>} />
        <Route path='/datagrid' element={<DataGridSample/>} />
    </Routes>


    <h1>Site Footer</h1>
  </>
  )
}

export default App