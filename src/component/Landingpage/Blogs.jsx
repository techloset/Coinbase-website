import React from 'react'

const Blogs = () => {
  return (
    <div>

      <div className='flex text-center justify-center mt-10'>

        <h4 className="font-poppins font-bold text-2xl leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
       text-transparent bg-clip-text">
          Our blog
        </h4>
      </div>
      <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />

      <div className='flex text-center justify-center mt-10'>
        <h4 className="font-poppins text-2xl leading-14 text-gray-500">
          Get to know the latest stuff via our blog post.
        </h4>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container m-6 py-24 ">
          <div className="flex flex-wrap pl-8">
            <div className="p-4 lg:w-1/3 ">
              <div className="h-96 w-96   bg-white-100 z-10 bg-white   border-gray-400 border  px-8 pt-10 pb-24  rounded-xl overflow-hidden text-center relative">
                <div className='flex flex-row  gap-2 ml-4 text-sm text-gray-400'>
                  <p>01 FEB, 2019</p>
                  <div className='border-l-2 h-5 border-gray-400 border '></div>
                  <p >TECHNOLOGY</p>
                </div>
                <div className='flex flex-col ml-4 gap-5 mt-3'>
                  <h1 className="tracking-normal sm:text-2xl text-gray-400  text-left font-bold  space-x-1 mt-3 mb-3">
                    HOW TO SELL YOUR ITUNES GIFTCARD WITH.</h1>
                  <p className="leading-normal text-left mb-3 text-gray-500">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start cursor-pointer rounded-full text-lg" >
                    READ MORE</button>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 ">
              <div className="h-96 w-96  transform scale-125 z-20 bg-white shadow-xl border-fuchsia-800 border   px-8 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className='flex flex-row  gap-2 ml-4 text-sm'>

                  <p>19 JUNE, 2019</p>
                  <div className='border-l-2 h-5 border-black '></div>
                  <p >BUSINESS</p>
                </div>
                <div className='flex flex-col ml-4 gap-5'>

                  <h1 className="tracking-normal sm:text-2xl bg-gradient-to-b from-[#C35B95] to-[#B254AB] text-transparent bg-clip-text    text-xl text-left font-bold  mt-3 mb-3">ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</h1>
                  <p className="leading-normal text-left ">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins justify-start cursor-pointer rounded-full text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
                    READ MORE</button>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 ">
              <div className="h-96 w-96  bg-white-100  border-gray-400 border  bg-opacity-75 px-8 pt-10 pb-24 rounded-xl overflow-hidden text-center relative">
                <div className='flex flex-row   gap-2 ml-2 text-sm text-gray-400'>

                  <p>01 FDEC, 2019</p>
                  <div className='border-l-2 h-5 border-gray-400 border '></div>
                  <p >LIFESTYLE</p>
                </div>
                <div className='flex flex-col ml-6 gap-5 mt-3'>
                  <h1 className="tracking-normal sm:text-2xl text-gray-400  text-left font-bold  space-x-1 mt-3 mb-3">
                    EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</h1>
                  <p className="leading-normal text-left mb-3 text-gray-500">Lorem ipsum dolor sit amet, magna habemus
                    ius ad, qui minimum voluptaria in. Ad mei modus
                    quodsi complectitur, postea...</p>
                  <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start cursor-pointer rounded-full text-lg" >
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