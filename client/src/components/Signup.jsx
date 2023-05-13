import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {MdAccountCircle} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {FiSmartphone} from 'react-icons/fi';
import {RiLockPasswordLine} from 'react-icons/ri';
import loginLogo from '../assets/login.png';

const Signup = () => {
  const [user, setUser] = useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });

  return (
    <>
    {/* <section >
      <div >
        <div >
          <div >
            <h2> Registration</h2>
            <form id='register-form'>
              
              <div >
                <label htmlFor="name">
                <MdAccountCircle/>
                </label>
                
                <input type="text" 
                id="name" 
                name="name"
                 placeholder="Name" 
                 autoComplete='off'/>

              </div>
              <div >
                <label htmlFor="email">
                <MdEmail/>
                </label>

                <input type="text" 
                id="email" 
                name="email"
                 placeholder="email" 
                 autoComplete='off'/>

              </div>
              <div >
                <label htmlFor="phone">
                <FiSmartphone/>
                </label>

                <input type="text" 
                id="phone" 
                name="phone"
                 placeholder="phone" 
                 autoComplete='off'/>

              </div>
              <div >
                <label htmlFor="password">
                <RiLockPasswordLine/>
                </label>

                <input type="password" 
                id="password" 
                name="password"
                 placeholder="password" 
                 autoComplete='off'/>

              </div>
              <div >
                <label htmlFor="cpassword">
                <RiLockPasswordLine/>
                </label>

                <input type="password" 
                id="cpassword" 
                name="cpassword"
                 placeholder="confirm password" 
                 autoComplete='off'/>

              </div>

              <div>
                <input type='submit' name='signup' id='signup' value='register'/>
              </div>


            </form>

            <div classNameName='img'>
              <figure>
                <img  alt="logo" />
              </figure>
              <Link to='/login'>I have already Signed Up</Link>
            </div>
          </div>

        </div>
      </div>

    </section>
     */}



     {/* --------gpy--------------- */}
     <section className=" t-16 flex justify-center items-center h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
    </div>
    <form id='register-form'>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          <MdAccountCircle className="inline"/>
          Name
        </label>
        <input type="text"  id="name" name="name" placeholder="Name" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <MdEmail className="inline"/>
          Email
        </label>
        <input type="text" id="email" name="email" placeholder="Email" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          <FiSmartphone className="inline"/>
          Phone
        </label>
        <input type="text" id="phone" name="phone" placeholder="Phone" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Password
        </label>
        <input type="password" id="password" name="password" placeholder="Password" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label htmlFor="cpassword" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Confirm Password
        </label>
        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="text-center">
        <input type='submit' name='signup' id='signup' value='Register' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
      </div>
    </form>
    </div>
    
    <div className="mt-3 text-center">
      <figure className="inline mx-auto mb-2">
        
        <Link to='/login' className=" text-gray-500 hover:text-gray-700"><img src={loginLogo } alt="logo" className="w-6 m-1" /> I have already signed up</Link>
      </figure>
     
   
      
  </div>
</section>

    </>
  )
}

export default Signup
