import React from 'react'
import Footer from '../Landingpage/Footer'
import Navbar from '../Landingpage/Navbar'
import bg from '../../images/blogcontent/BG.svg'
import ReferenceIMG from '../../images/blogcontent/Reference_IMG.svg'
import SocialIcons from '../../images/blogcontent/Social_Icons.svg'

const BlogContent = () => {
  return (
    <>

      <Navbar />

      <div className='md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg1' style={{
        backgroundImage: `url(${bg})`
      }}>
        <div class=" flex justify-center w-full flex-col text-center h-[70%] py-16 ">
          <h1 class=" font-poppins sm:text-4xl text-3xl mb-4 font-bold  text-white ">ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER <br /> Transactions</h1>
          <div className='flex flex-row text-xs justify-center items-center gap-3 text-white'>
            <span>19 JUNE, 2019 </span> <span className='border-l md:pl-2 '>BUSINESS</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="my-container text-center w-[75%] sm:w-[50%] text-gray-600">
          <p className='sm:leading-7  font-normal text-sm text-justify '>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
          </p>


          <p className='sm:leading-7 mt-4 sm:mt-8 gap-y-6 font-normal text-sm text-justify '>Planning Your Luxury Trip</p>
          <p className='sm:leading-7 mt-4 sm:mt-8 gap-y-6 font-normal text-sm text-justify'> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
            truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual
            teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          <p className='sm:leading-7 mt-4 sm:mt-8 gap-y-6 font-normal text-sm text-justify'>
            The next part of planning is to determine your starting and ending ports.
            This could be a place close to home and sail in one area or start and finish at two different ports.
            Generally, starting and stopping in the same port will save you money and is usually more convenient.
            You can also fly to a destination far from home and then sail another exotic sea.
            There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska,
            the Panama Canal, or anyplace you can imagine.</p>
          <p className='sm:leading-7 mt-4 sm:mt-8 gap-y-6 font-normal text-sm text-justify'>
            Determining the type of cruise is another aspect of planning a chartered yachting trip.
            You can have as little or many crew members as the ship will hold.
            A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation
            that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation
            package.
          </p>

          <section class="text-gray-600 ">
            <div class="container py-5  sm:py-20 mx-auto flex flex-wrap">
              
              <div class="flex flex-col flex-wrap lg:py-6  lg:w-[60%] lg:text-left  text-center">
                <div class="flex flex-col mb-5 sm:mb-10 lg:items-start items-center">

                  <div class="flex-grow">
                    <p class="leading-relaxed text-start"> If you like the idea of knowing what it is really like to sail, but don’t want to risk safety,
                      you can charter a sailing cruise that puts you in the role of deck hand.
                      A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course.</p>

                  </div>
                </div>
                <div class="flex flex-col mb-10 sm:mb-10 lg:items-start items-center">

                  <div class="flex-grow">
                    <p class="leading-relaxed text-start "> Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing
                      a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that
                      can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and
                      if you want to add or subtract stops along the way.</p>

                  </div>
                </div>
              </div>
              <div class="lg:w-[39%] w-full mb- sm:mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img alt="feature" class="object-cover object-center w-[486px] h-[486px]" src={ReferenceIMG} />
              </div>
            </div>
          </section>

          <p className='sm:leading-7 mt-4 sm:mt-8 gap-y-6 font-normal text-sm text-justify'>
            Your yacht is your hotel that travels with you. There is only one flight and one hotel to book!
            Then you take all of your luggage and unpack it just once to enjoy several days of new destinations.

          </p>
          <br />
          <p className='sm:leading-7 mt-4 sm:mt-8 gap-y-6 font-normal text-sm text-justify'>
            If you have never experienced cruising before, a chartered experience is a great way to get your feet wet.
            It is different from cruise lines with thousands of guests because the people on your ship will be your friends
            and family. The personal touches of
            a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.
          </p>
          <br />


          <div className='lg:flex lg:flex-row lg:justify-between my-9 flex flex-col gap-3'>
            <h1 className='font-Poppins font-bold text-sm text-left'>Tags: Business, Capital, Finance</h1>
            <div className='flex flex-row gap-7 mb-3'>
              <p className='pt-2'>Share with</p>
              <img src={SocialIcons} alt="" />
            </div>
          </div>

          <div className='flex sm:justify-between sm:flex-row   flex-col gap-2 '>
            <div>

              <h1 className='font-Poppins font-bold text-md text-start'>How to sell your <br /> iTunes giftcard with us</h1>
              <p className='font-Poppins leading-10 text-xs text-start'>Prev Post</p>
            </div>
            <div>
              <h1 className='font-Poppins font-bold text-md sm:text-end bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent 
              bg-clip-text cursor-pointer text-start'>Exchange 5 products <br /> and get 1 free product</h1>
              <p className='font-Poppins leading-10 text-xs text-start sm:text-end'>Next Post</p>
            </div>
          </div>

        </div>
      </div>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-start  w-full mb-12 ">
            <h1 className="sm:text-3xl text-xl font-bold pl-0 sm:pl-52 title-font mb-4 text-gray-900">Leave A Comment</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your email address will not be published. Required fields are marked *</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap ">
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
              <div className="p-2 w-full">
                <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg"
                  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>PUBLISH</button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />




    </>
  )
}

export default BlogContent