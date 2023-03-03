import React from 'react'
import Footer from '../Landingpage/Footer'
import Navbar from '../Landingpage/Navbar'
import './Blog.css'
const Blog = () => {
  return (
    <>
      <Navbar />

      <div className='md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg1' style={{
        backgroundImage: 'url("navimg/BG.png")'
      }}>

        <div className='flex flex-col text-white    lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-6 mainText1 ' style={{ width: '314px', height: '' }}>
          <p className='text-xs'>HOME/BLOG</p>
          <h6 className='font-poppins font-semibold text-2xl leading-10'>Stay updated, Never miss a post.</h6>
          <p className='text-xs leading-5'>Get to know the latest stuff about our services via our blog post.</p>

        </div>
        <div className=''>
          <img src="navimg/BLOGIMG.png" alt="" className='mainImg1 ' />
        </div>
      </div>


      <div className=" mx-auto flex w-5/6  py-16    flex-col ">
        <img className="lg:w-2/6 md:w-3/6    object-cover object-center rounded herosection1" alt="hero" src="navimg/IMG Placeholder.png" />
        <div className=" flex justify-center w-full flex-col text-center h-[70%] py-16 rounded-b-3xl border-l-2 border-r-2 border-b-2 border-fuchsia-600">
          <h1 className=" font-poppins sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text  ">HOW TO SELL YOUR ITUNES GIFTCARD WITH US.</h1>
          <div className='flex flex-row justify-center items-center gap-3'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>
          <p className="mb-8  text-center px-20 leading-10">Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
          </div>
        </div>
      </div>


      <div className=" mx-auto flex w-5/6  py-16    flex-col ">
        <img className="lg:w-2/6 md:w-3/6    object-cover object-center rounded herosection2" alt="hero" src="navimg/merry.png" />
        <div className=" flex justify-center w-full flex-col text-center h-[70%] py-16 rounded-b-3xl border-l-2 border-r-2 border-b-2 border-fuchsia-600">
          <h1 className=" font-poppins sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text  ">EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</h1>
          <div className='flex flex-row justify-center items-center gap-3'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>
          <p className="mb-8  text-center px-20 leading-10">Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex w-5/6  py-16    flex-col ">
        <img className="lg:w-2/6 md:w-3/6    object-cover object-center rounded herosection3" alt="hero" src="navimg/Exchange.png" />
        <div className=" flex justify-center w-full flex-col text-center h-[70%] py-16 rounded-b-3xl border-l-2 border-r-2 border-b-2 border-fuchsia-600">
          <h1 className=" font-poppins sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text  ">ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</h1>
          <div className='flex flex-row justify-center items-center gap-3'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>
          <p className="mb-8  text-center px-20 leading-10">Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg"
              style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
          </div>
        </div>
      </div>


      <div className='flex flex-row justify-center items-center gap-3 py-14 h-full'>
        <button className='rounded-full text-lg  w-14 h-14' style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>01</button>
        {/* <div>01</div> */}
        <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>02</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>03</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>-</button>
        <button className='rounded-full w-24 h-14 text-lg bg-white shadow-lg border border-gray-300'>Next</button>
      </div>

      <Footer/>



    </>
  )
}

export default Blog