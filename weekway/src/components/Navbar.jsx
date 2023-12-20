import React ,{useState} from 'react'

import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    < div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="#gallery" >Gallery</a>
          </li>
          <li>
            <a href="#deals" >Deals</a>
          </li>
          <li>
            <a href="#contact" >Contact</a>
          </li>
     </ul>

     <div className='flex justify-between'>
         <FaFacebook className='mx-4' />
         <FaTwitter className='mx-4' />
         <FaGooglePlusG className='mx-4' />
          <FaInstagram className='mx-4' />

     </div>

     <div>

      <FaBars  size={20} className='mr-4 cursor-pointer'/>
    </div>  
    <div className={'overflow-y md:hidden ease-in duration-300 text-gray-300 absolute left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col' } >
      <ul>

        <li>
          <a href="/">Home</a>
        </li>
        <li>
            <a href="#gallery" >Gallery</a>
          </li>
          <li>
            <a href="#deals" >Deals</a>
          </li>
          <li>
            <a href="#contact" >Contact</a>
          </li>








      </ul>
    </div>


    </div>
  )
}

export default Navbar