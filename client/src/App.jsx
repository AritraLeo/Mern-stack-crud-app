import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import  Navbar  from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Edit from './components/Edit'
import Details from './components/Details';


// Router:
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'



function App() {

  return (
    <>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/edit/:id' element={<Edit/>} />
        <Route exact path='/view/:id' element={<Details/>} />
        </Routes>
    </>
  )
}

export default App
