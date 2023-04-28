import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar';
import ImageGenerationForm from './components/Generator';

const App =  ()=>{

  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/generate" element={<ImageGenerationForm/>}/> <Route path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;