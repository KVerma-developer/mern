import React from 'react';
import Profile from '../assets/login.png';

const About = () => {
  return (
    <>
  <div class="p-6 mt-20">
    <form method=''>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div class=" mr-8 text-center md:text-left">
          <img src={Profile} alt='profileImage' class="w-32 h-32 rounded-full mx-auto md:mx-0 md:mr-6" />
          <input type="submit" class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 md:mt-0' name='btnAddMore' value="Edit Profile" />
        </div>

        <div class="md:col-span-2">
          <div class="mb-4">
            <h5 class="text-xl font-bold">Kanhaiya Verma</h5>
            <h6 class="text-lg font-semibold">Web Developer</h6>
          </div>

          <ul class="flex border-b" role='tablist'>
            <li class="-mb-px mr-1">
              <a  class="bg-white inline-block py-2 px-4 font-semibold hover:text-blue-500">About</a>
            </li>
            
          </ul>

          <div class="p-4">
            <div id='myTabContent'>
              <div id='home' role='tabpanel' aria-labelledby='home-tab'>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">User ID</label>
                  <p>76786767867678</p>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">Name</label>
                  <p>Kanhaiya Verma</p>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">Contact</label>
                  <p>4736278443</p>
                </div>
              </div>
              <div id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">Experience</label>
                  <p>experience data</p>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">Education</label>
                  <p>Education Data</p>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">Project</label>
                  <p>About Project</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </form>
  </div>
</>

  )
}

export default About
