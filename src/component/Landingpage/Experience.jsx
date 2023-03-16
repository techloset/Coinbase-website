import React from 'react'
import experience from '../../images/landingpage/Ñëîé.svg'
import Trade from '../../images/landingpage/trade.svg'
import BitcoinCards from '../../images/landingpage/Bitcoincards.svg'
import GiftCards from '../../images/landingpage/Giftcards.svg'
import line from '../../images/landingpage/Line.svg'


const Experience = () => {
  return (
    <div>

      <section className="text-gray-600">
        <div className="container px-5 md:px-20 py-5  mx-auto">
          <div className="lg:w-full mx-auto  flex flex-row max-lg:flex max-lg:flex-col-reverse">
            <div className=" w-full lg:pl-10 lg:py-6  lg:mt-0 leading-10">
              <h1 className="font-bold text-2xl sm:font-bold sm:text-2xl mb-3 leading-10 bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text">Great experience <br />
                with CoinBase</h1>
              <img src={line} alt="" />
              <p className="leading-5 sm:leading-10 py-6 w-[80%] sm:w-[530px]">CoinBase is an online site and a
                p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely.
                Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
              </p>

              <div className="flex">
                <button class="flex gap-16 text-white font-poppins cursor-pointer rounded-full text-lg  border-0 py-2 px-6  " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
              </div>
            </div>
            <img alt="ecommerce" class="lg:w-1/2 mt-0" src={experience} />
          </div>
        </div>
      </section>






      {/* Trade from anywhere */}

      <div className='bg-center mt-3 sm:mt-16 flex justify-center items-center ' style={{ height: '550px', backgroundImage: `url(${Trade})`, backgroundSize: "cover" }} >
        <div className=' bg-white  sm:mt-32 lg:w-[980px] lg:h-[504px] md:w-[700px] md:h-[450px]  sm:w-[500px] sm:h-[350px] w-[300px] h-[370px] shadow-lg rounded-2xl  '>
          <div className='flex text-center justify-center mt-10'>
            <h4 className="font-poppins font-bold sm:text-2xl text-lg
                 leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text">
              Trade from anywhere
            </h4>
          </div>
          <img src={line} alt="" class="mx-auto my-auto mt-4"  />
          <div className='sm:flex sm:flex-row sm:justify-center   sm:mt-16 sm:align-baseline gap-7 sm:gap-14 flex flex-col justify-center items-center mt-5'>

            <div className='border-fuchsia-800 border  rounded-xl md:w-[262px] md:h-[226px]  sm:w-[160px] sm:h-[150px]    w-[140px] h-[100px] gap-1 flex flex-col justify-center text-center items-center sm:gap-8'>
              <img src={BitcoinCards} alt="" width='40px' height='40px' />
              <p className='font-bold text-md'>Bitcoin</p>
            </div>

            <div className='border-fuchsia-800 border  rounded-xl md:w-[262px] md:h-[226px]  sm:w-[160px] sm:h-[150px] w-[140px] h-[100px]  gap-1 flex flex-col justify-center text-center items-center sm:gap-8'>
              <img src={GiftCards} alt="" width='40px' height='40px' />
              <p className='font-bold text-md'>Gift Cards</p>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Experience