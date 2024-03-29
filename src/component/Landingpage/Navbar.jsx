import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import NavLogo from '../../images/landingpage/Logo.svg'
import Drop from '../../images/landingpage/dropdown-Button.svg'
import '../../App.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [open,setOpen] =useState(false)
  function dropDown(){
    setOpen(!open)
  }
  function clickMe() {
    setIsOpen(!isOpen);
  }


  const [path, setPath] = useState(window.location.pathname);


  return (
    <>
      <nav className='flex  justify-evenly max-w-[100%] max-md:mb-[1.3rem]  md:mb-[2.8rem]'>
        <div className=' md:mt-[52px] max-lg:flex max-lg:flex-row max-lg:items-center max-lg:gap-44 max-md:gap-24 '>
          <button className='lg:hidden max-lg:pt-'> <Hamburger easing="ease-in" onToggle={clickMe} color='gray' size={30} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
          <Link to='/'> <img src={NavLogo} alt="" className='  max-sm:hidden' /> </Link>
        </div>

        <ol className='flex justify-center max-md:mt-[20px] md:mt-[57px] leading-5 
         font-poppins font-bold w-[50%] text-center xl:gap-8 max-xl:gap-6 max-lg:hidden'>
          <li className={`${path == '/' ? 'border-b-4 border-[#FD749B]  h-fit':'line'} `}>
            <li className='text-[#333333] text-[14px] font-bold '> <Link to='/'> Home </Link></li> </li>   
           <li className={` ${path == '/about'? ' border-b-4 border-[#FD749B] h-fit':'line'} `}>
          <li  className='text-[#333333] text-[14px] font-bold '>  <Link to='/about'> About Us</Link></li>
           </li><li className={` ${path == '/blog'? 'border-b-4 border-[#FD749B] h-fit' :'line'} `}>
          <li  className='text-[#333333] text-[14px] font-bold '> <Link to='/blog'> Blog </Link></li>
           </li>
           <li className={`${path == '/blog-content' ? 'border-b-4 border-[#FD749B] h-fit':'line'} `}>
         <li  className='text-[#333333] text-[14px] font-bold '>
         <Link to='/blog-content'> Blog Content </Link>
         </li>
           </li>
           <li className={`${path == '/contact' ? 'border-b-4 border-[#FD749B] h-fit':'line'} `}>
          <li  className='text-[#333333] text-[14px] font-bold ' > <Link to='/contact'> Contact Us </Link></li>
           </li>

        </ol>
        <div className='flex justify-center  gap-5 '>
          <button id="dropdownOffsetButton"  onClick={dropDown}
          data-dropdown-toggle="dropdownOffset" 
          data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100" 
          data-dropdown-placement="right" className="text-[#333333] text-[14px]  max-sm:hidden h-fit max-md:mt-[20px] md:mt-[70px] lg:mt-[58px]
            focus:ring-blue-300 font-bold
          text-md  text-center inline-flex items-center 
            "
             type="button">Sell Bitcoin/ Giftcard <img src={Drop} alt="" />
              </button>
             
          {/* <!-- Dropdown menu --> */}
          <div id="dropdownOffset" class={`z-10 max-md:mt-[68px] md:mt-[100px] lg:mt-[90px] ml-12 border-[1px] border-[#E0E0E0] absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-white-700  ${open? 'block':'hidden'}   `}>
            <ul className=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" className="block px-4 py-2 text-[#333333] text-[12px] hover:bg-white ">Sell Bitcoin</a>
              </li>
              <li>
                <a href="#" className="block pl-4 py-3 mt-2 font-normal text-sm text-[#FFFFFF] text-[12px] rounded-bl-lg rounded-br-lg dark:hover:bg-white " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)'}}>Sell Giftcard</a>
              </li>
              
            </ul>
          </div>

          <button
            className="lg:py-[17px] lg:px-[56px]  px-[36px] max-md:mt-[10px] md:mt-[60px] lg:mt-[37px]  text-[#FFFFFF] font-poppins font-bold cursor-pointer rounded-full lg:text-[14px] max-lg:text-base"
            style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}
          >
            LOGIN
          </button>
        </div>
      </nav>
      {
        isOpen && (
          <ol className='flex flex-col justify-center leading-10 mt-2 font-poppins font-bold  text-center '>
            <Link to='/'> <li className='border-gradient active text-[#333333] text-[14px] font-bold'>Home</li></Link>
            <Link to='/about'> <li className='border-gradient text-[#333333] text-[14px] font-bold'>About Us</li></Link>
            <Link to='/blog'> <li className='border-gradient text-[#333333] text-[14px] font-bold'>Blog</li></Link>
            <Link to='/blog-content'> <li className='border-gradient text-[#333333] text-[14px] font-bold'>BlogContent</li></Link>
            <Link to='/contact'> <li className='border-gradient text-[#333333] text-[14px] font-bold'>Contact Us</li></Link>
          </ol>
        )
      }






















    </>
  )
}

export default Navbar


































