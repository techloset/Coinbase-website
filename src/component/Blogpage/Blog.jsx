import React from 'react'
import Footer from '../Landingpage/Footer'
import Navbar from '../Landingpage/Navbar'
import bg from '../../images/blogpage/BG.svg'
import Img from '../../images/blogpage/IMG.svg'
import Friends from '../../images/blogpage/friend.svg'
import Merry from '../../images/blogpage/merry.svg'
import Eth from '../../images/blogpage/eth.svg'
const Blog = () => {
  return (
    <>
      <Navbar />

      <div className='md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg1' style={{
        backgroundImage: `url(${bg})`
      }}>

        <div className='flex flex-col text-white   lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-5 sm:gap-3 md:gap-6 px-8 sm:w-[540px] ' >
          <p className='text-xs font-normal'>HOME/Blog</p>

          <h6 className='font-poppins text-2xl  font-bold sm:text-4xl sm:leading-[2.6rem]'>Stay updated, <br /> Never miss a post.</h6>
          <p className='text-xs sm:text-lg font-normal  sm:leading-5'>Get to know the latest stuff about our services
            via our blog post.</p>

        </div>
        <div className=''>
          <img src={Img} alt="" className='mainImg1 ' />
        </div>
      </div>


      <div className=" mx-auto flex w-2/3 sm:w-5/6   sm:py-16    flex-col ">
        <img className="lg:w-[100%]   sm:[80%]  object-cover object-center rounded" alt="hero" src={Friends} />
        <div className=" flex justify-center gap-3 flex-col text-center h-[70%] py-5 sm:py-16 rounded-b-3xl border-l-2 border-r-2 border-b-2 border-fuchsia-600">
          <h1 className=" font-poppins sm:text-3xl text-lg  sm:mb-4 font-bold bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text  ">HOW TO SELL YOUR ITUNES GIFTCARD WITH US.</h1>
          <div className='flex flex-row justify-center items-center sm:gap-3'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>
          <div className='flex justify-center items-center'>

            <p className="sm:mb-8  text-center  sm:px-20 text-black text-[16px] w-[870px] sm:leading-10">Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex w-2/3 sm:w-5/6  py-10 sm:py-16    flex-col ">
        <img className="lg:w-[100%]   sm:[80%]  object-cover object-center rounded" alt="hero" src={Merry} />
        <div className=" flex justify-center gap-5 flex-col text-center h-[70%] py-5 sm:py-16 rounded-b-3xl border-l-2 border-r-2 border-b-2 border-fuchsia-600">
          <h1 className=" font-poppins sm:text-4xl text-xl  sm:mb-4 font-bold bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text  ">HOW TO SELL YOUR ITUNES GIFTCARD WITH US.</h1>
          <div className='flex flex-row justify-center items-center sm:gap-3'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>


          <div className='flex justify-center items-center'>

            <p className="sm:mb-8  text-center  sm:px-20 text-black text-[16px] w-[870px] sm:leading-10">Lorem ipsum dolor sit amet, magna habemus ius ad,
              qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
          </div>

          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
          </div>
        </div>
      </div> <div className=" mx-auto flex w-2/3 sm:w-5/6   sm:py-16    flex-col ">
        <img className="lg:w-[100%]   sm:[80%]  object-cover object-center rounded" alt="hero" src={Eth} />
        <div className=" flex justify-center gap-5 flex-col text-center h-[70%] py-5 sm:py-16 rounded-b-3xl border-l-2 border-r-2 border-b-2 border-fuchsia-600">
          <h1 className=" font-poppins sm:text-4xl text-xl  sm:mb-4 font-bold bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text  ">HOW TO SELL YOUR ITUNES GIFTCARD WITH US.</h1>
          <div className='flex flex-row justify-center items-center sm:gap-3'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>
          <div className='flex justify-center items-center'>

            <p className="sm:mb-8  text-center  sm:px-20 text-black text-[16px] w-[870px] sm:leading-10">Lorem ipsum dolor sit amet, magna habemus ius ad,
              qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
          </div>
        </div>
      </div>





      <div className='flex flex-row justify-center items-center gap-3 py-14 h-full'>
        <button className='rounded-full text-lg  w-14 h-14' style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>01</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>02</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>03</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>-</button>
        <button className='rounded-full w-24 h-14 text-lg bg-white shadow-lg border border-gray-300'>Next</button>
      </div>

      <Footer />



    </>
  )
}

export default Blog