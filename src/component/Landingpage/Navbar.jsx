import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom"

import '../../App.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  function clickMe(){
    setIsOpen(!isOpen);
  }
  return (
    <>
    <nav className='flex  justify-around max-w-[100%] p-6'>
      <div className='max-md:flex max-md:flex-row max-md:items-center max-md:gap-32 '>
      {/* className='max-lg:w-20 max-lg:h-7' */}
        <button  className='md:hidden max-md:pt-4'> <Hamburger easing="ease-in" onToggle={clickMe} color='gray' size={30} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
       <img src="navimg/logo.png"  alt=""  className='pt-4 max-sm:hidden'/> 
      </div>

        <ol className='flex justify-center 
        pt-6 font-poppins font-bold w-[50%] text-center xl:gap-14 max-xl:gap-8 max-md:hidden'>         
       <Link to='/'> <li className='border-gradient'>Home</li></Link> 
       <Link to='/About'> <li className='border-gradient'>About Us</li></Link>  
       <Link to='/Blog'> <li className='border-gradient'>Blog</li></Link>
       <Link to='/BlogContent'> <li className='border-gradient'>BlogContent</li></Link>  
       <Link to='/Contact'> <li className='border-gradient'>Contact Us</li></Link>  

          
        </ol>
      <div className='flex justify-center pt-4 gap-5 '>
        <select name="" id="" className='font-poppins font-bold max-lg:tracking-wide max-lg:w-14'>
          <option value="" className='font-poppins font-bold  text-md'>Sell  Bitcoin/Gitcard</option>
          <option value=""  >Sell Bitcoin</option>
          <option value="" >Sell Gitcard</option>
        </select>
       <button
  className="lg:w-36 max-lg:w-20 h-11 text-white font-poppins cursor-pointer rounded-full lg:text-lg max-lg:text-base"
  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}
>
  LOGIN
</button>
      </div>
    </nav>
    {
        isOpen && (    
        <ol className='flex flex-col justify-center leading-10 mt-2 font-poppins font-bold  text-center '>      
          <li >Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ol>
        )
      }






















    </>
  )
}

export default Navbar


































