import React,{ useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';;
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';

import { Route, Routes } from 'react-router-dom';


import './App.css'

function App() {
 

  return (
    <>

      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      </Routes>
      {/* <Routes> */}
      {/* <Route  path="/" ><Home/></Route>
      <Route  path="/about" ><About/></Route>
      <Route  path="/contact" ><Contact/></Route>
      <Route  path="/signup" ><Signup/></Route>
      <Route  path="/login" ><Login/></Route> */}
      {/* </Routes> */}

      
      
     
      
      
    </>
  )
}

export default App
