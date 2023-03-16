import React from 'react'
import line from '../../images/blogpage/Line.svg'

const Blogs = () => {
  return (
    <>

      <div className='flex text-center flex-col  justify-center mt-20'>

        <h4 className="font-poppins font-bold text-2xl leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
       text-transparent bg-clip-text">
          Our blog
        </h4>
      <img src={line} alt="" className='h-[7px]'  />
      </div>

      <div className='flex text-center justify-center w-[90%] pl-[10%] mt-10'>
        <h4 className="font-poppins text-base font-normal leading-14 text-gray-700">
          Get to know the latest stuff via our blog post.
        </h4>
      </div>


  


      
        <div className="  pt-[6rem] flex flex-row justify-center items-center mx-[5rem]">
         
              <div className=" bg-white-100 z-10 bg-white max-lg:hidden lg:block   border-gray-400 border   sm:px-8 sm:pt-10 pb-[27px] rounded-xl overflow-hidden text-center ">
                <div className='flex flex-row ml-[40px] gap-2  text-sm text-gray-500'>
                  <p>01 FEB, 2019</p>
                  <div className='border-l-2 h-5 border-gray-400 border '></div>
                  <p >TECHNOLOGY</p>
                </div>
                <div className='flex flex-col ml-[40px] sm:gap-3 '>
                  <h1 className="tracking-normal sm:text-xl text-gray-400  text-left font-bold  space-x-1 sm:mt-3 sm:mb-3">
                    HOW TO SELL YOUR ITUNES GIFTCARD WITH.</h1>
                  <p className="leading-[18px] text-left   text-gray-400">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start cursor-pointer rounded-full text-sm font-bold" >
                    READ MORE</button>
                </div>
              </div>
            
              <div className=" transform max-lg:w-[80%] max-sm:w-[300px] scale-125 z-20 bg-white shadow-xl border-fuchsia-800 border sm:px-8 pb-[27px]  sm:pt-10  rounded-lg overflow-hidden text-center ">
                <div className='flex flex-row  sm:gap-2 ml-[30px] mt-[10px]   font-norml text-[10px] gap-1 sm:text-sm'>

                  <p>19 JUNE, 2019</p>
                  <div className='border-l-2 h-5 border-black '></div>
                  <p >BUSINESS</p>
                </div>
                <div className='flex flex-col ml-[30px]  sm:gap-5 gap-3 '>

                  <h1 className=" sm:text-xl bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text    text-xs text-left font-bold mt-1 sm:mt-3 mb-3">
                    ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</h1>
                  <p className=" text-start text-[10px] sm:text-sm text-black leading-[20px]">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="sm:w-36 sm:h-11 w-[80px] h-[44px]  text-white font-poppins font-bold justify-start cursor-pointer rounded-full text-[10px] sm:text-sm" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
                    READ MORE</button>
                </div>
              </div>
           

            
              <div className="  bg-white-100 max-lg:hidden lg:block  border-gray-400 border  bg-opacity-75 sm:px-8 sm:pt-10 sm:pb-[27px] rounded-xl overflow-hidden text-center ">
                <div className='flex flex-row   gap-2  text-sm text-gray-500'>

                  <p>01 FDEC, 2019</p>
                  <div className='border-l-2 h-5 border-gray-400 border '></div>
                  <p >LIFESTYLE</p>
                </div>
                <div className='flex flex-col  sm:gap-3 '>
                  <h1 className="tracking-normal sm:text-xl text-gray-400  text-left font-bold  space-x-1 sm:mt-3 sm:mb-3">
                    EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</h1>
                  <p className="leading-[18px] text-left text-gray-400">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start font-bold cursor-pointer rounded-full text-sm" >
                    READ MORE</button>
                </div>
              </div>
           
        </div>
      
    </>
  )
}

export default Blogs