import React from 'react'
import './getStart.css'
import LandingBG from '../../images/landingpage/BG.svg'
import IMG from '../../images/landingpage/IMG.svg'
import Layer from '../../images/landingpage/landing_layer.svg'
import Rates from '../../images/landingpage/rates.svg'
import Bitcoin from '../../images/landingpage/bitcoin.svg'
import Eth from '../../images/landingpage/Eth.svg'
import Bankbuilding from '../../images/landingpage/bank-building.svg'
import line from '../../images/landingpage/Line.svg'
import transfer from '../../images/landingpage/Transfer.svg'
import doubletransfer from '../../images/landingpage/Double-transfer.svg'



const Getstart = () => {
  return (
    < >

      <div className='md:justify-evenly  flex  h-[750px] w-full bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg' style={{
        backgroundImage: `url(${LandingBG})`,
      }}>

        <div className='flex flex-col text-white ml-4  lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-4 sm:gap-3 md:gap-6 px-8 sm:w-[540px] ' >
          <h6 className='font-poppins text-xl  font-normal sm:text-4xl sm:leading-[2.6rem]'>We provide easy solution
            to exchange you <b className='tracking-wide sm:tracking-wide'>    Bitcoin / GiftCard for money </b></h6>
          <p className='text-xs sm:text-lg font-normal  sm:leading-5'>CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.</p>
          <button className='bg-white font-bold rounded-full self-start py-[17px] px-[32px]  font-poppins cursor-pointer text-sm ' >
            <span className="bg-gradient-to-b from-[#C35B95] to-[#B254AB]" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GET STARTED</span>
          </button>
        </div>
        <div >
          <img src={IMG} alt="" className='w-[280px] h-[280px] lg:w-[628px] lg:h-[519px] md:w-[500px] md:h-[470px] lg:mt-[60px]' />
        </div>
      </div>

      {/* discover portion */}

      <section className="text-gray-600">
        <div className="container px-5 md:px-12  mx-auto">
          <div className="lg:w-full mx-auto  flex flex-row max-lg:flex max-lg:flex-col">
            <img alt="ecommerce" class="lg:w-1/2 mt-0" src={Layer} />
            <div className=" w-full lg:pl-10 lg:py-4  ">
              <h1 className="font-bold text-2xl sm:font-bold sm:text-3xl mb-3 sm:leading-10 bg-gradient-to-b from-[#FD749B] to-[#B254AB] text-transparent bg-clip-text">Welcome to CoinBase</h1>
              <img src={line} alt="" />
              <p className="leading-5 sm:leading-8 w-[90%]  py-5 text-[16px]  text-[#333333]">We have the best rates . Simply start your exchange right now. Sign up
                for our Affiliate program and earn commission from each
                exchange. The earnings are credited in your account instantly and
                can be withdrawn right away. Also note some exchange directions
                are hidden for unregistered user. To ensure to have access to all
                our exchange directions and benefits kindly sign up and verify your
                identity.</p>

              <button class="flex md:mt-7 text-[#FFFFFF] text-[0.875rem] font-poppins cursor-pointer rounded-full text-lg  border-0 py-[1.0625rem] px-[2.0625rem]  " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>

            </div>
          </div>
        </div>
      </section>

      {/* OUR RATES OUR RESERVES LATEST EXCHANGES */}
      <div style={{ backgroundImage: `url(${Rates})` }} className='w-full bg-center mt-[-100px] h-[900px] bg-no-repeat bg-cover flex justify-center items-center '>
        <div className='w-[80%] sm:w-[50%] sm:h-[43%] lg:w-[1070px] h-[300px]  shadow-xl scroll scroll rounded-[30px] overflow-y-auto mt-44 bg-white '>
          <div className='flex justify-around border-b-2 items-center h-[80px]  text-2xl font-bold leading-tight text-transparent  bg-gradient-to-b from-[#FD749B] to-[#B254AB] bg-clip-text'>
            <p >OUR RATES</p>
            <p className='hidden lg:block'>OUR RESERVES</p>
            <p className='hidden lg:block'>LATEST EXCHANGES</p>

          </div>
          <div className='flex flex-col lg:flex-row justify-evenly gap-12 items-center  '>

            <div className='flex flex-col gap-10  '>
              <div className='flex gap-7 mt-6' >

                <p className='flex items-center justify-center gap-3 h-fit'>
                  <img src={Bitcoin} alt="" /></p>
                BTC
                <div>

                  <p>We Buy @ <b>  ₦350/$ </b></p>
                  <p className='pt-4'>We Sell <b>@ ₦370/$ </b></p>
                </div>
              </div>



              <div className='flex gap-8' >

                <p className='flex items-center justify-center gap-3 h-fit'>
                  <img src={Eth} alt="" /></p>
                ETH
                <div>

                  <p>We Buy @ <b>  ₦350/$ </b></p>
                  <p className='pt-4'>We Sell <b>@ ₦370/$ </b></p>
                </div>
              </div>
            </div>
            <p className='block lg:hidden text-center border-b-2 pb-2  text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>OUR RESERVES</p>

            <div className='flex flex-col gap-5 lg:mt-6'>



              <div className='flex flex-col gap-5' >

                <p className='flex flex-row gap-10 h-fit'>
                  <div className='flex items-center justify-center gap-2 h-fit '>
                    <img src={Bankbuilding} alt="" />
                    Bank Transfer
                  </div> <p>NGN</p>  </p>
                <p className='self-end'> <b>#3452030300303.24/$ </b> </p>
              </div>



              <p className='flex gap-10 h-fit'>

                <div
                  className='flex items-center justify-center gap-2 h-fit'        >
                  <img src={Bitcoin} alt="" />
                  Bitcoin
                </div>
                <p><b>399.98</b> BTC</p>
              </p>



              <p className='flex gap-10 h-fit'>
                <div
                  className='flex items-center justify-center gap-4 h-fit'        >
                  <img src={Eth} alt="" />
                  Ethereum
                </div>
                <p><b>1000.00</b> ETH</p>
              </p>

            </div>
            <p className='block lg:hidden text-center border-b-2 pb-2 text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>LATEST EXCHANGES</p>

            <div className='flex flex-col gap-2 lg:mb-6'>
              <button className='self-center w-[80px] h-[20px] px-1 mt-3 text-xs text-white rounded-md bg-gradient-to-br from-pink-500 to-indigo-900'>8 hours ago</button>
              <div className='flex flex-col  '>
                <p className='flex items-center justify-start h-fit text-[14px]' >
                  <p>Bitcoin BTC</p> <img src={transfer} alt="" /> Bank
                </p>
                <p>
                  Transfer NGN</p>
              </div>
              <div className='py-2'>

                <p className='flex items-center justify-start gap-2 border-b-2'>
                  <p className='whitespace-nowrap'><b>1.16</b> BTC</p>
                  <img src={doubletransfer} alt="" />
                  <p className='lg:whitespace-nowrap' ><b>696152299929.23</b>
                    NGN</p>
                </p>
              </div>
              <p className='flex flex-col items-start text-[14px] justify-start h-fit '>
                <div className='flex flex-row items-center justify-start h-fit'>
                  Amazon Card <img className='' src={transfer} alt="" />     Bank
                </div>
                <p>Transfer NGN</p>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Getstart