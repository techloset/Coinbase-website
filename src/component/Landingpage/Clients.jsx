import React from 'react'
import ourClients from '../../images/landingpage/ourclient.svg'
import line from '../../images/landingpage/Line.svg'
import Testimonials from '../../images/landingpage/testimonial.svg'
import store from '../../images/landingpage/Store.svg'
const Clients = () => {
    return (
        <>
            <div className='bg-center mt-[-20px]   flex flex-col justify-center relative bg-cover w-[100%] h-[1500px] bg-no-repeat'
                style={{  backgroundImage: `url(${ourClients})`}}>
                <div className="flex flex-col justify-center items-center mt-[6rem] text-center  ">
                    <h1 class="sm:text-3xl text-xl  font-medium title-font text-white">10,000 Satisfied clients
                        <br /> around the world</h1>
                    <img src={line} className="mt-3" alt=""/>

                    <p className="w-[70%] sm:[35%] xl:w-[35%]   leading-10 mt-5 font-poppins font-normal  text-sm leading-40 text-center text-white" >Yeah! we’re proud with numbers.
                        We've helped thousands of clients all around the world with our bespoke service.
                        Hover ontop of them pic to view their testimonials.</p>
                 <img src={Testimonials} alt="" />
                </div>

                <div className="flex flex-col justify-center z-20 absolute bottom-[-10%] left-[8%] sm:left-[20%] lg:left-[30%] xl:left-[35%] items-center text-center space-y-6">
                    <h1 className="font-poppins font-bold text-[28px] 
                           leading-[65px] bg-gradient-to-b from-[#D463A4] to-[#BB58A9]
                          text-transparent bg-clip-text">Download our app</h1>
                    <img src={line} alt="" />

                    <p className=" text-[16px] md:w-[70%] text-[#333333] font-normal tracking-wide leading-10">Discover exclusive deals and discounts with
                        our mobile experience.</p>
                        <img src={store} alt="Store" />
                </div>
                
            </div>
               


        </>
    )
}

export default Clients