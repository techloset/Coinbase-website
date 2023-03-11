import React from 'react'
import Footer from '../Landingpage/Footer'
import Navbar from '../Landingpage/Navbar'
import './Contact.css'
import bg from '../../images/contactpage/BG.svg'
import contact from '../../images/contactpage/contact.svg'
import mapp from '../../images/contactpage/MapMap.svg'


const Contact = () => {
  return (
    <>
      <Navbar />

      <div className='md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg1' style={{
        backgroundImage: `url(${bg})`
      }}>

        <div className='flex flex-col text-white   lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-5 sm:gap-3 md:gap-6 px-8 sm:w-[540px] ' >
          <p className='text-xs font-normal'>HOME/CONTACT US</p>

          <h6 className='font-poppins text-2xl  font-bold sm:text-4xl sm:leading-[2.6rem]'>24/7 Customer support
            Including weekends.</h6>
          <p className='text-xs sm:text-lg font-normal  sm:leading-5'>We’re always there ti help regardless the number
            of queries at hand.</p>

        </div>
        <div className=''>
          <img src={contact} alt="" className='mainImg1 ' />
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

                <button
                  className="lg:w-36 max-lg:w-36 w-[157px] h-[54px] text-white font-poppins cursor-pointer rounded-full lg:text-lg max-lg:text-base"
                  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}
                >
                  PUBLISH
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className='flex justify-center items-center mb-20'>
        <img src={mapp} alt="" />
      </div>

     

      <Footer />

    </>
  )
}

export default Contact