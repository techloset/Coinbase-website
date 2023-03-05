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
      <div className='max-lg:flex max-lg:flex-row max-lg:items-center max-lg:gap-44 max-md:gap-24 '>
      {/* className='max-lg:w-20 max-lg:h-7' */}
        <button  className='lg:hidden max-lg:pt-4'> <Hamburger easing="ease-in" onToggle={clickMe} color='gray' size={30} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
       <img src="navimg/Logo.png"  alt=""  className='pt-4  max-sm:hidden'/> 
      </div>

        <ol className='flex justify-center 
        pt-6 font-poppins font-bold w-[50%] text-center xl:gap-14 max-xl:gap-6 max-lg:hidden'>         
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
  className="lg:w-36 max-lg:w-36 w-[157px] h-[54px] text-white font-poppins cursor-pointer rounded-full lg:text-lg max-lg:text-base"
  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}
>
  LOGIN
</button>
      </div>
    </nav>
    {
        isOpen && (    
        <ol className='flex flex-col justify-center leading-10 mt-2 font-poppins font-bold  text-center '>      
           <Link to='/'> <li className='border-gradient'>Home</li></Link> 
       <Link to='/About'> <li className='border-gradient'>About Us</li></Link>  
       <Link to='/Blog'> <li className='border-gradient'>Blog</li></Link>
       <Link to='/BlogContent'> <li className='border-gradient'>BlogContent</li></Link>  
       <Link to='/Contact'> <li className='border-gradient'>Contact Us</li></Link>  
        </ol>
        )
      }






















    </>
  )
}

export default Navbar


































