import React from 'react'
import Footer from '../Landingpage/Footer'
import Navbar from '../Landingpage/Navbar'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <Navbar />

            <div className='md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg1' style={{
                backgroundImage: 'url("navimg/BG.png")'
            }}>

                <div className='flex flex-col text-white    lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-6 mainText1 ' style={{ width: '314px', height: '' }}>
                    <p className='text-xs'>HOME/BLOG</p>
                    <h6 className='font-poppins font-bold text-2xl leading-10'>24/7 Customer support
                        Including weekends.</h6>
                    <p className='text-xs leading-5'>We’re always there ti help regardless the number
                        of queries at hand.</p>

                </div>
                <div className=''>
                    <img src="navimg/CONTACTIMG.png" alt="" className='mainImg1 ' />
                </div>
            </div>

            <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center  w-full mb-12">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your email address will not be published. Required fields are marked *</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-10 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" placeholder='Name *' className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-10 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" placeholder='Email *' name="email" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" placeholder='Your Comment' className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
                </div>
              </div>
              <div className="p-2 mt-5 w-full">
                {/* <button classNameName="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-xl text-lg"
                  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button> */}
                   <button className='bg-white font-bold rounded-full self-start w-36 h-11  font-poppins cursor-pointer text-lg' >
            <span className="bg-gradient-to-b from-[#C35B95] to-[#B254AB]" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GET STARTED</span>
          </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="con mx-auto md:w-2/3  my-24 overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative">
      <iframe
        title="map"
        className="absolute inset-0 w-[66%] h-[100%]"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        frameBorder="0"
        scrolling="no"
        style={{ filter: 'yellowscale(1) contrast(1.2) opacity(0.4)' }}
        allowFullScreen
      ></iframe>
      <div className="bg-white md:w-[35%] relative flex flex-wrap  ml-28 py-6 rounded-xl items-center shadow-md">
        <div className=" px-8 flex flex-row gap-5 mt-3">
          <img src="navimg/pin-3.png" alt="" className='h-6 w-8'/>
          <p className="">13 Sawyer Crescent Victoria Island Lagos Nigeria</p>
        </div>
        <div className=" px-8 flex flex-row gap-5 mt-4">
          <img src="navimg/phone-call.png" alt="" className='h-6 w-5'/>
          <p className="">(+234) 137632128</p>
        </div> <div className=" px-8 flex flex-row gap-5 mt-5">
          <img src="navimg/email-83.png" alt="" className='h-5 w-6'/>
          <p className="">support@coinbase.com</p>
        </div>
      </div>
    </div>

    <Footer/>

        </>
    )
}

export default Contact