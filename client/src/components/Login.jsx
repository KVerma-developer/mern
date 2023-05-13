import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {MdEmail} from 'react-icons/md';

import {RiLockPasswordLine} from 'react-icons/ri';
import loginLogo from '../assets/login.png';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  return (
    <div>
      
      <section className="flex justify-center items-center h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
    </div>
    <form id='register-form'>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <MdEmail className="inline"/>
          Email
        </label>
        <input type="text" id="email" name="email" placeholder="Email" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Password
        </label>
        <input type="password" id="password" name="password" placeholder="Password" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      
      <div className="text-center">
        <input type='submit' name='signin' id='signin' value='Login In' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
      </div>
    </form>
    </div>
    
    <div className="mt-3 text-center">
      <figure className="inline mx-auto mb-2">
        
        <Link to='/signup' className=" text-gray-500 hover:text-gray-700"><img src={loginLogo } alt="logo" className="w-6 m-1" /> Create an Account</Link>
      </figure>
     
   
      
  </div>
</section>

    
    </div>
  )
}

export default Login
