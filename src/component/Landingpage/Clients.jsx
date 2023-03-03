import React from 'react'

const Clients = () => {
    return (
        <div>
            <div className='  bg-center flex-col  flex justify-center  '
                style={{ height: '1250px', width: '100%', backgroundImage: 'url("navimg/Testimonials.png")', backgroundSize: "cover" }}>
                <div className="flex flex-col text-center  ">
                    <h1 class="sm:text-3xl text-xl  font-medium title-font text-white">10,000 Satisfied clients
                        <br /> around the world</h1>
                    <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{ width: '50px', heigth: '0px', alignItems: 'center', justifyContent: 'center' }} />

                    <p className="lg:w-2/3 mx-auto leading-10 mt-5 font-poppins font-normal  font-100 text-sm leading-40 text-center text-white" style={{ width: '40%' }}>Yeah! we’re proud with numbers.
                        We’ve helped thousands of clients all around the world with our bespoke service.
                        Hover ontop of them pic to view their testimonials.</p>
                </div>
               
            </div>


        </div>
    )
}

export default Clients