import React from 'react'

const Blogs = () => {
  return (
    <div>

      <div className='flex text-center justify-center mt-20'>

        <h4 className="font-poppins font-bold text-2xl leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
       text-transparent bg-clip-text">
          Our blog
        </h4>
      </div>
      <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />

      <div className='flex text-center justify-center mt-10'>
        <h4 className="font-poppins text-base font-normal leading-14 text-gray-700">
          Get to know the latest stuff via our blog post.
        </h4>
      </div>

      <section className=" flex justify-center ">
        <div className="container w-[100%]  pt-[6rem] ">
          <div className="flex flex-wrap justify-center items-center">
            <div className=" 3xl:w-1/3 ">
              <div className="sm:h-96 sm:w-96  h-56 w-64 bg-white-100 z-10 bg-white   border-gray-400 border   sm:px-8 sm:pt-10 sm:pb-24  rounded-xl overflow-hidden text-center relative">
                <div className='flex flex-row  gap-2 ml-4 text-sm text-gray-500'>
                  <p>01 FEB, 2019</p>
                  <div className='border-l-2 h-5 border-gray-400 border '></div>
                  <p >TECHNOLOGY</p>
                </div>
                <div className='flex flex-col ml-4 sm:gap-5 mt-4'>
                  <h1 className="tracking-normal sm:text-xl text-gray-400  text-left font-bold  space-x-1 sm:mt-3 sm:mb-3">
                    HOW TO SELL YOUR ITUNES GIFTCARD WITH.</h1>
                  <p className="leading-normal text-left mb-3 mt-3 text-gray-400">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start cursor-pointer rounded-full text-sm font-bold" >
                    READ MORE</button>
                </div>
              </div>
            </div>

            <div className=" 3xl:w-1/3 ">
              <div className="sm:h-96 sm:w-96 h-56 w-60 transform scale-125 z-20 bg-white shadow-xl border-fuchsia-800 border pl-5 sm:px-8 sm:pt-10 pt-2  sm:pb-24 rounded-lg overflow-hidden text-center relative">
                <div className='flex flex-row  sm:gap-2 sm:ml-4 gap-3 font-norml text-sm'>

                  <p>19 JUNE, 2019</p>
                  <div className='border-l-2 h-5 border-black '></div>
                  <p >BUSINESS</p>
                </div>
                <div className='flex flex-col  mt-2 sm:gap-5 gap-3 '>

                  <h1 className=" sm:text-2xl bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text    text-sm text-left font-bold mt-1 sm:mt-3 mb-3">
                    ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</h1>
                  <p className=" text-start text-sm text-black leading-7">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins font-bold justify-start cursor-pointer rounded-full text-sm" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
                    READ MORE</button>
                </div>
              </div>
            </div>

            <div className=" 3xl:w-1/3 ">
              <div className="sm:h-96 sm:w-96 h-56 w-64  bg-white-100  border-gray-400 border  bg-opacity-75 sm:px-8 sm:pt-10 sm:pb-24 rounded-xl overflow-hidden text-center relative">
                <div className='flex flex-row   gap-2  text-sm text-gray-500'>

                  <p>01 FDEC, 2019</p>
                  <div className='border-l-2 h-5 border-gray-400 border '></div>
                  <p >LIFESTYLE</p>
                </div>
                <div className='flex flex-col  sm:gap-5 mt-4'>
                  <h1 className="tracking-normal sm:text-xl text-gray-400  text-left font-bold  space-x-1 sm:mt-3 sm:mb-3">
                    EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</h1>
                  <p className="leading-normal text-left mt-3 mb-3 text-gray-400">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start font-bold cursor-pointer rounded-full text-sm" >
                    READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs