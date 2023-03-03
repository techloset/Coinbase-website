import React from 'react'

const Downloadapp = () => {
    return (
        <div>

            <div className="flex justify-center w-full h-56   md:bg-center"  >
                <div className="flex flex-col items-center  ">

                    <div className="flex flex-col justify-center items-center text-center  max-w-7xl    py-8 px-10">
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
            </div>



            <div className="flex flex-row bg-cover bg-center relative  mb-10 "  style={{width:'100%',height:'600px'}}>

                <div className='flex flex-row  relative m-auto h-[100%] w-[100%]  ' style={{ backgroundImage: 'url("navimg/Group 437.png")' }}>

                    <div className='w-60 h-[50%] top-72 left-96  absolute'>
                        <img src="navimg/X-1.png" alt="Image 1" class=" object-cover" />
                    </div>
                    <div className='w-60 h-[50%] top-72 left-[50%] absolute'>
                        <img src="navimg/X-2.png" alt="Image 1" class=" object-cover" />
                    </div>
                </div>
            </div>


            <div className="flex justify-center  items-center   bg-no-repeat  bg-cover h-[50%] md:bg-center"  >
                    <div className="flex flex-col justify-center items-center text-center  max-w-7xl pt-56 pb-20 px-10">
                        <h1 className="font-poppins font-bold text-2xl 
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                                text-transparent bg-clip-text">Subscribe our newsletter
                                </h1>
                        <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />
                        <p className="mt-4 text-sm md:w-[60%] tracking-wide leading-7">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                        <div className="flex w-full justify-center mt-11 items-end ">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                                <input type="text" id="hero-field" placeholder='EMAIL' name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded-full  focus:bg-transparent border border-fuchsia-800   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg"

                                style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}

                            >DISCOVER</button>
                        </div>
                    </div>
                
            </div>



        </div>

    )
}

export default Downloadapp