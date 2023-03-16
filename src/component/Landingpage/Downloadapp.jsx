import React from 'react'
import store from '../../images/landingpage/Store.svg'
import xphone from '../../images/landingpage/Xphone.svg'
import yphone from '../../images/landingpage/Yphone.svg'
import AppBG from '../../images/landingpage/appbg.svg'
import line from '../../images/landingpage/Line.svg'

const Downloadapp = () => {
    return (
        <>
            
                <div className="flex flex-col justify-center items-center text-center space-y-6">
                    <h1 className="font-poppins font-bold text-2xl 
                           leading-14 bg-gradient-to-b from-[#D463A4] to-[#BB58A9]
                          text-transparent bg-clip-text">Download our app</h1>
                    <img src={line} alt="" />

                    <p className=" text-sm md:w-[27%] font-normal tracking-wide leading-7">Discover exclusive deals and discounts with
                        our mobile experience.</p>
                        <img src={store} alt="Store" />
                </div>
           
            <div className='flex justify-center flex-row  relative  h-[657px] w-[100%] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${AppBG})` }}>

                <div className='sm:w-60 sm:h-[50%] top-72 h-[30%] w-[30%] right-[52%]  absolute'>
                    <img src={xphone} alt="Image 1" class=" object-cover" />
                </div>
                <div className='sm:w-60 sm:[50%] top-72 h-[30%] w-[30%] left-[52%] absolute'>
                    <img src={yphone}  alt="Image 1" class=" object-cover" />
                </div>
            </div>


            <div className="flex justify-center  items-center   bg-no-repeat  bg-cover h-[50%] md:bg-center"  >
                <div className="flex flex-col justify-center items-center text-center  max-w-7xl pt-56 pb-20 px-10">
                    <h1 className="font-poppins font-bold text-[1.7rem] 
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                                text-transparent bg-clip-text">Subscribe our newsletter
                    </h1>
                    <img src={line} alt="" />
                    <p className="mt-4 text-base md:w-[60%] font-normal text-black  leading-10">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    <div className="sm:flex sm:flex-row gap-4 w-full sm:justify-center mt-11 sm:items-center flex flex-col justify-center items-center">
                            <input type="text" id="hero-field" placeholder='EMAIL' name="hero-field" class="sm:w-[60%] w-[75%] text-black bg-gray-100 bg-opacity-50 rounded-full  focus:bg-transparent border border-fuchsia-800    outline-none font-normal text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button className="inline-flex text-white border-0 py-2 px-4 h-fit w-fit focus:outline-none rounded-full text-sm sm:text-lg"

                            style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}

                        >DISCOVER</button>
                    </div>
                </div>

            </div>



        </>

    )
}

export default Downloadapp