import React from 'react'
import ourClients from '../../images/landingpage/ourclient.svg'
import line from '../../images/landingpage/Line.svg'
import Testimonials from '../../images/landingpage/testimonial.svg'

const Clients = () => {
    return (
        <div>
            <div className='bg-center mt-[-10px] flex flex-col justify-center relative bg-cover w-[100%] h-[1500px] bg-no-repeat'
                style={{  backgroundImage: `url(${ourClients})`}}>
                <div className="flex flex-col justify-center items-center mt-[6rem] text-center  ">
                    <h1 class="sm:text-3xl text-xl  font-medium title-font text-white">10,000 Satisfied clients
                        <br /> around the world</h1>
                    <img src={line} className="mt-3" alt=""/>

                    <p className="w-[70%] sm:[35%] xl:w-[35%]   leading-10 mt-5 font-poppins font-normal  font-100 text-sm leading-40 text-center text-white" >Yeah! we’re proud with numbers.
                        We've helped thousands of clients all around the world with our bespoke service.
                        Hover ontop of them pic to view their testimonials.</p>
                 <img src={Testimonials} alt="" />
                </div>
                
            </div>
               


        </div>
    )
}

export default Clients