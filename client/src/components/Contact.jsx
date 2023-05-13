import React from 'react';
import {MdAccountCircle} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {FiSmartphone} from 'react-icons/fi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {MdOutlineMapsHomeWork} from 'react-icons/md';
import loginLogo from '../assets/login.png';

const Contact = () => {
  return (
    <>
     <div className="  pt-20 flex flex-col space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
      <FiSmartphone/>
        <h2 className="text-lg font-semibold mb-2">Phone</h2>
        <p className="text-gray-700">(123) 456-7890</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
      <MdEmail/>
        <h2 className="text-lg font-semibold mb-2">Email</h2>
        <p className="text-gray-700">example@gmail.com</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <MdOutlineMapsHomeWork/>
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <p className="text-gray-700">Your Address</p>
      </div>
      
      
    </div>
    

    {/* /-------------------contact start-------------- */}
    <section className="flex justify-center items-center h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    </div>
    <form id='contact-form' method='POST'>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          <MdAccountCircle className="inline"/>
          Name
        </label>
        
        <input type="text" id="name" 
        name="name" 
        placeholder="Name" 
        required
        autoComplete='off' 
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <MdEmail className="inline"/>
          Email
        </label>
        
        <input required type="email" id="email" name="email" placeholder="Email" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          <FiSmartphone className="inline"/>
          Phone
        </label>

        <input  type="number" id="phone" name="phone" placeholder="Phone" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Address
        </label>
        <input type="text" id="address" name="address" placeholder="address"  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Message
        </label>
        <textarea rows={5} cols={5} type="text" id="message" name="message" placeholder="type your message" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="text-center">
        <button type='submit'  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Me!</button>
      </div>
    </form>
    </div>
    
    
</section>
    </>
  )
}

export default Contact
