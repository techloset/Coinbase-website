import React from 'react'

const Downloadapp = () => {
    return (
        <>
                <div className='flex justify-center flex-row  relative  h-[657px] w-[100%] bg-no-repeat bg-cover' style={{ backgroundImage: 'url("navimg/Group 437.png")' }}>

                    <div className=" ml-[10rem] sm:ml-[8rem]">
                        <div className="flex flex-col justify-center items-center text-center  max-w-7xl     px-10">
                            <h1 className="font-poppins font-bold text-2xl 
                           leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                          text-transparent bg-clip-text">Download our app</h1>
                            <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />
                            <p className="mt-4 text-sm md:w-[60%] tracking-wide leading-7">Discover exclusive deals and discounts with
                                our mobile experience.</p>
                            <div className="flex mt-8 space-x-5">
                                <img src="navimg/app-store-logo.png" alt="" />
                                <img src="navimg/google-play.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='sm:w-60 sm:h-[50%] top-72 h-[30%] w-[30%] right-[55%]  absolute'>
                        <img src="navimg/X-1.png" alt="Image 1" class=" object-cover" />
                    </div>
                    <div className='sm:w-60 sm:[50%] top-72 h-[30%] w-[30%] left-[50%] absolute'>
                        <img src="navimg/X-2.png" alt="Image 1" class=" object-cover" />
                    </div>
                </div>


            <div className="flex justify-center  items-center   bg-no-repeat  bg-cover h-[50%] md:bg-center"  >
                <div className="flex flex-col justify-center items-center text-center  max-w-7xl pt-56 pb-20 px-10">
                    <h1 className="font-poppins font-bold text-[1.7rem] 
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                                text-transparent bg-clip-text">Subscribe our newsletter
                    </h1>
                    <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />
                    <p className="mt-4 text-base md:w-[60%] font-normal text-black  leading-10">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    <div className="flex w-full justify-center mt-11 items-end ">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input type="text" id="hero-field" placeholder='EMAIL' name="hero-field" class="w-full text-black bg-gray-100 bg-opacity-50 rounded-full  focus:bg-transparent border border-fuchsia-800    outline-none font-normal text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg"

                            style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}

                        >DISCOVER</button>
                    </div>
                </div>

            </div>



        </>

    )
}

export default Downloadapp