import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo2.png';

const Navbar = () => {
  return (
    <div>
      
<nav className="bg-gradient-to-r from-purple-500 to-sky-500 p-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <img src={Logo}  alt="Logo" className="h-12 mr-4"/>
      <h1 className="text-white font-bold text-lg">My Website</h1>
    </div>
    <div className="flex items-center">
      <Link to="/" className="text-white font-bold text-lg hover:text-gray-300 p-2">Home</Link>
      <Link to="/about" className="text-white font-bold text-lg hover:text-gray-300 p-2">About</Link>
      <Link to="/contact" className="text-white font-bold text-lg hover:text-gray-300 p-2">Contact</Link>
      
      <Link to="/login" className="text-white font-medium hover:text-gray-200 mx-3">Login</Link>
      <Link to="/signup" className="bg-white text-purple-500 font-medium hover:bg-gray-200 hover:text-purple-500 px-4 py-2 rounded-full mx-3">Register</Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
