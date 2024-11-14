import React from 'react'
import { NavLink } from "react-router-dom";
import { assets } from '../assets/assets';


const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-8 border-b-2  border-customGrayLight' >
      
      <h3 className='text-black-600 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent '>Faiq<span className='font-semibold ml-1 text-lg' >Ahmed</span> </h3>
      
      <div className='flex gap-6 items-center' >
      <ul className='flex gap-8 text-sm text-customGray' >
      <NavLink to='/' >
      <li>Home</li>
      </NavLink>

      <NavLink to='/about' >
      <li>About</li>
      </NavLink>

      <NavLink to='/techstack' >
      <li>TechStacks</li>
      </NavLink>

      <NavLink to='/projects' >
      <li>Projects</li>
      </NavLink>

      <NavLink to='/contact' >
      <li>Contact</li>
      </NavLink>
      </ul>

      <div className='flex gap-2' >
        <img className='w-6 h-6' src={assets.github_img} alt="" />
        <img className='w-6 h-6' src={assets.twitter_img} alt="" />
        <img className='w-6 h-6' src={assets.linkedin_img} alt="" />
      </div>

      </div>

    </div>
  )
}

export default Navbar
