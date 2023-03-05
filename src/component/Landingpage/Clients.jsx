import React from 'react'

const Clients = () => {
    return (
        <div>
            <div className='bg-center flex flex-col justify-center  bg-cover w-[100%] h-[1300px] bg-no-repeat'
                style={{  backgroundImage: 'url("navimg/Testimonials.png")' }}>
                <div className="flex flex-col justify-center items-center text-center  ">
                    <h1 class="sm:text-3xl text-xl  font-medium title-font text-white">10,000 Satisfied clients
                        <br /> around the world</h1>
                    <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4 " style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />

                    <p className="lg:w-2/3  w-[80%] leading-10 mt-5 font-poppins font-normal  font-100 text-sm leading-40 text-center text-white" >Yeah! we’re proud with numbers.
                        We’ve helped thousands of clients all around the world with our bespoke service.
                        Hover ontop of them pic to view their testimonials.</p>
                </div>
                
            </div>
               


        </div>
    )
}

export default Clients