import React from 'react'
import './getStart.css'

const Getstart = () => {
  return (
    < >

      <div className='md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg' style={{
        backgroundImage: 'url("navimg/BG.png")',
      }}>

        <div className='flex flex-col text-white   lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-5 sm:gap-3 md:gap-6 px-3  ' style={{width:'314px',height:''}}>
          <h6 className='font-poppins text-md  sm:text-2xl sm:leading-8'>We provide easy solution
            to exchange you <b className='tracking-wide sm:tracking-wide'>    Bitcoin / GiftCard for money </b></h6>
          <p className='text-xs sm:text-sm  sm:leading-5'>CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.</p>
          <button className='bg-white font-bold rounded-full self-start w-[157px] h-[54px]  font-poppins cursor-pointer text-md' >
            <span className="bg-gradient-to-b from-[#C35B95] to-[#B254AB]" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GET STARTED</span>
          </button>
        </div>
        <div >
          <img src="navimg/IMG.png" alt="" className='w-[280px] h-[280px] lg:w-[628px] lg:h-[519px] md:w-[500px] md:h-[470px]' style={{ }} />
        </div>
      </div>






      {/* discover portion */}

<section className="text-gray-600">
  <div className="container px-5 md:px-12  mx-auto">
    <div className="lg:w-full mx-auto  flex flex-row max-lg:flex max-lg:flex-col">
      <img alt="ecommerce" class="lg:w-1/2 mt-0" src="navimg/Layer 2.png" />
      <div className=" w-full lg:pl-10 lg:py-6  lg:mt-0 leading-10">
        <h1 className="font-bold text-2xl sm:font-bold sm:text-2xl mb-3 sm:leading-10 bg-gradient-to-b from-[#C35B95] to-[#B254AB] text-transparent bg-clip-text">Welcome to CoinBase</h1>
        <img src="navimg/Line.png" alt="" />
        <p className="leading-5 sm:leading-10 mb-6 ">We have the best rates . Simply start your exchange right now. Sign up
            for our Affiliate program and earn commission from each
            exchange. The earnings are credited in your account instantly and
            can be withdrawn right away. Also note some exchange directions
            are hidden for unregistered user. To ensure to have access to all
            our exchange directions and benefits kindly sign up and verify your
            identity.</p>
     
        <div className="flex">
          <button class="flex gap-16 text-white font-poppins cursor-pointer rounded-full text-lg  border-0 py-2 px-6  "  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
         
        </div>
      </div>
    </div>
  </div>
</section>

      {/* OUR RATES OUR RESERVES LATEST EXCHANGES */}
      <div className='  bg-center   w-full flex justify-center items-center ' style={{ height: '800px', backgroundImage: 'url("navimg/BG1.png")', backgroundSize: "cover" }}>

        <div className=' bg-white w-[91%]  xl:w-3/4 h-1/3 mt-32  rounded-lg'>
          <div className='flex justify-around mt-4 border-b-2 pb-5 font-bold text-lg
          bg-gradient-to-b from-[#C35B95] to-[#B254AB] text-transparent bg-clip-text cursor-pointer'>
            <h1>OUR RATES</h1>
            <h1 className='max-sm:hidden'>OUR RESERVES</h1>
            <h1 className='max-lg:hidden'>LATEST EXCHANGES</h1>
           
            
          </div>

          <div className='flex justify-between mx-10 mt-10 ' >
            <section>
              <div className='flex justify-between gap-2 sm:gap-5 '>
                <div className='flex gap-3 '>
                  <h1>    <img src="navimg/Bitcoin1.png" alt="" />  </h1>
                  <span> BTC</span>
                </div>
                <div className=''><p>We Buy@<b>₦350/$</b></p><p>We Sell@<b>₦370/$</b></p></div>
              </div>
              <div className='flex gap-2 sm:gap-5 mt-5'>
                <h1>
                  <img src="navimg/Eth.png" alt="" />
                </h1>
                <span> ETH</span>
                <div className=''>
                  <p>We Buy @ <b> ₦350/$ </b></p>
                  <p>We Sell @ <b> ₦370/$ </b></p>
                </div>
              </div>
            </section>

            <section className='max-sm:hidden'>
              <div className='flex justify-between gap-5 '>
                <div className='flex gap-3'>
                  <h1>
                    <img src="navimg/bank-building.png" alt="" />
                  </h1>
                  <span> BTC</span>

                </div>
                <div className=''>
                  <p>NGN</p>
                  <p className='text-justify'><b> #3452030300303.24/$</b></p>
                </div>

              </div>
              <div className='flex gap-5 mt-1'>
                <h1>
                  <img src="navimg/Bitcoin1.png" alt="" />
                </h1>
                <span> Bitcoin</span>
                <div className=''>
                  <p><b>399.98</b>  BTC</p>
                </div>

              </div>
              <div className='flex gap-5 mt-4'>
                <h1>
                  <img src="navimg/Eth.png" alt="" />
                </h1>
                <span> Ethereum</span>
                <div className=''>
                  <p>  <b> 1000.00 </b> ETH</p>
                </div>

              </div>
            </section>



            <section className='max-lg:hidden'>
           
              <div className='flex justify-between gap-5 '>
                <div className='flex gap-3'>
                  <span className='text-xs'> Bitcoin BTC <img src="navimg/Transfer.png" alt="" />
                    Bank Transfer NGN</span>
                </div>
                <button className="w-32 h-8  text-white font-poppins cursor-pointer text-lg" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
                  8HOURSAGO</button>
              </div>
              <div className='flex space-x-2 '>
                <p>1.16 BTC  </p>
                <img src="navimg/Double transfer.png" style={{ height: '13px', marginTop: '5px' }} alt="" />
                <p className='text-sm'> <b > 696152299929.23 </b>NGN</p>
              </div>
              <div className='flex justify-between gap-5 '>
                <div className='flex gap-3'>
                  <span className='text-xs'> Amazon Card<img src="navimg/Transfer.png" alt="" />
                    Bank Transfer NGN</span>
                </div>
              </div>
            </section>
            <div >
              <img src="navimg/Scroll.png" style={{ height: '133px' }} alt="" />
            </div>

          </div>
        </div>
        <div>
        </div>
      </div>

    </>
  )
}

export default Getstart