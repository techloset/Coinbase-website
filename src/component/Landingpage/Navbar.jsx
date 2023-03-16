import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import NavLogo from '../../images/landingpage/Logo.svg'
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
      <nav className='flex  justify-evenly max-w-[100%]  mt-[3.6rem] mb-[3.2rem]'>
        <div className='max-lg:flex max-lg:flex-row max-lg:items-center max-lg:gap-44 max-md:gap-24 '>
          <button className='lg:hidden max-lg:pt-4'> <Hamburger easing="ease-in" onToggle={clickMe} color='gray' size={30} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
          <Link to='/'> <img src={NavLogo} alt="" className='pt-4  max-sm:hidden' /> </Link>
        </div>

        <ol className='flex justify-center 
        pt-6 font-poppins font-bold w-[50%] text-center xl:gap-8 max-xl:gap-6 max-lg:hidden'>
          <li className={`${path == '/'? 'border-b-4 border-pink-400':'line'} `}>
              <Link to='/'> Home </Link>
</li>
          
           <li className={` ${path == '/about'? 'border-b-4 border-pink-400':'line'} `}>
          <li >  <Link to='/about'> About Us</Link></li>
           </li><li className={` ${path == '/blog'? 'border-b-4 border-pink-400':'line'} `}>
          <li > <Link to='/blog'> Blog </Link></li>
           </li>
           <li className={`${path == '/blog-content' ? 'border-b-4 border-pink-400':'line'} `}>
         <li>
         <Link to='/blog-content'> Blog Content </Link>
         </li>
           </li>
           <li className={`${path == '/contact' ? 'border-b-4 border-pink-400':'line'} `}>
          <li > <Link to='/contact'> Contact Us </Link></li>
           </li>
          {/* {`${path == '/' && 'border-b-4 border-pink-400'}  ml-[60px] hover:text-red-500`} onClick={() => setPath(window.location.pathname)}>  */}
          {/* <Link to='/'> Home </Link> */}
          {/* <li className={`${path == '/blog' && 'border-b-4 border-pink-400'} `} onClick={() => setPath(window.location.pathname)}>  <Link to='/blog'> Blog </Link></li> */}
          {/* <li className={`${path == '/blog-content' && 'border-b-4 border-pink-400'} `} onClick={() => setPath(window.location.pathname)}>   <Link to='/blog-content'> Blog Content </Link> </li> */}
          {/* <li className={`${path == '/contact' && 'border-b-4 border-pink-400'} `} onClick={() => setPath(window.location.pathname)}> <Link to='/contact'> Contact Us </Link> </li> */}


        </ol>
        <div className='flex justify-center mt-[0.5rem] gap-5 '>
          {/* <select name="" id="" className='font-poppins font-bold max-lg:tracking-wide max-lg:w-14'>
          <option value="" className='font-poppins font-bold  text-md'>Sell  Bitcoin/Gitcard</option>
          <option value=""  >Sell Bitcoin</option>
          <option value="" >Sell Gitcard</option>
        </select> */}

          <button id="dropdownOffsetButton"  onClick={dropDown}
          data-dropdown-toggle="dropdownOffset" 
          data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100" 
          data-dropdown-placement="right" class="text-black  h-fit mt-[15px] 
            focus:ring-blue-300 font-bold
          text-md  text-center inline-flex items-center 
            "
             type="button">Sell Bitcoin/ Giftcard <svg class="w-4 h-4 ml-2" aria-hidden="true" 
             fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
          {/* <!-- Dropdown menu --> */}
          <div id="dropdownOffset" class={`z-10 mt-[60px] ml-12 border-[1px] border-[#E0E0E0] absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-white-700  ${open? 'block':'hidden'}   `}>
            <ul class=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" class="block px-4 py-2 text-black hover:bg-white ">Sell Bitcoin</a>
              </li>
              <li>
                <a href="#" class="block pl-4 py-3 mt-2 font-normal text-sm text-white rounded-bl-lg rounded-br-lg dark:hover:bg-white " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)'}}>Sell Giftcard</a>
              </li>
              
            </ul>
          </div>

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
            <Link to='/'> <li className='border-gradient active'>Home</li></Link>
            <Link to='/about'> <li className='border-gradient'>About Us</li></Link>
            <Link to='/blog'> <li className='border-gradient'>Blog</li></Link>
            <Link to='/blog-content'> <li className='border-gradient'>BlogContent</li></Link>
            <Link to='/contact'> <li className='border-gradient'>Contact Us</li></Link>
          </ol>
        )
      }






















    </>
  )
}

export default Navbar


































