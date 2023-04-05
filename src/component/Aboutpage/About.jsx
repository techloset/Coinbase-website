import React from 'react'
import Footer from '../Landingpage/Footer'
import Navbar from '../Landingpage/Navbar'
import bg from '../../images/aboutpage/BG.svg'
import img from '../../images/aboutpage/IMG.svg'
import aboutimg from '../../images/aboutpage/imgabout.svg'
import qualities from '../../images/aboutpage/Qualities.svg'
import tree from '../../images/aboutpage/Tree.svg'
import line from '../../images/aboutpage/Line.svg'

const About = () => {
  return (
    <>
      <Navbar />


      <div className='md:justify-evenly  flex w-full h-[730px]  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg' style={{
        backgroundImage: `url(${bg})`,
      }}>

        <div className='flex flex-col text-white   lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-5 sm:gap-3 md:gap-6 px-8 sm:w-[540px] ' >
          <p className='text-xs font-normal'>HOME/ABOUT US</p>

          <h6 className='font-poppins text-3xl  font-bold sm:text-[40px] sm:leading-[60px]'>Great service, <br />
            Professional support</h6>
          <p className='text-xs sm:text-lg font-normal'>CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.</p>

        </div>
        <div >
          <img src={img} alt="" className='mt-5 md:mt-[98px] w-[220px] h-[220px] lg:w-[549px] lg:h-[405px] md:w-[400px] md:h-[350px] ' />
        </div>
      </div>

      <div className='flex flex-col justify-center  items-center w-[70%]  md:w-[480px] gap-5 h-15 sm:h-48 leading-10 mt-0 sm:leading-10 max-lg:h-[80%] mx-auto'>
        <p className='bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent 
        bg-clip-text cursor-pointer font-bold  pt-0 text-lg text-center'
        >
          “Morbi sagittis ultricies ex, a tempus lorem suscipit non.
          Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”</p>
        <img src={line} alt="" />
        <p className='text-sm leading-[25px]'>Ramon Ridwan • CEO CoinBase</p>
      </div>




      <section className="border-fuchsia-400  my-10  border-2 sm:border-2  lg:border-2 max-w-[300px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto h-[70%] rounded-3xl">
        <div className="container mx-auto flex py-6  sm:py-12 items-center justify-center flex-col ">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-3 sm:mb-10 object-cover object-center rounded " alt="hero" src={aboutimg} />
          <div className="flex flex-col justify-center items-center text-center lg:w-2/3 w-full gap-3 sm:gap-7">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl
                 leading-10 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text">About CoinBase</h1>
            <img src={line} alt="" />
            <p className="mb-8 leading-5 sm:leading-10 text-center items-center  text-base  sm:w-[525px]">CoinBase is an online site and a p2admin platform that
              allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
            </p>
            <img src={qualities} alt="" />
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center mx-auto lg:w-2/3  gap-7">

        <h1 className="font-poppins font-bold text-2xl sm:text-3xl
                 leading-14 bg-gradient-to-b from-[#D664A4] to-[#B856A9]
                   text-transparent bg-clip-text">Our history</h1>
        <img src={line} alt="" />

        <div className="flex flex-row justify-evenly items-center ">
          <div className='flex flex-col w-[50%] sm:w-[34%] text-end gap-5 sm:gap-16 md:gap-56'>
            <div className=" p-4 ">
              <h1 className='text-[#ed7fb2] text-base md:text-2xl font-extrabold leading-5 md:leading-10'>May 2010</h1>
              <p className='leading-4 md:leading-8'>
                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
            </div>
            <div className=" p-4 ">
              <h1 className='text-[#ed7fb2] text-base md:text-2xl font-extrabold leading-5 md:leading-10'>May 2019</h1>
              <p className='leading-4 md:leading-8'>
                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
            </div>

          </div>
          <div>

            <img src={tree} className="md:w-5 md:h-[15%]  h-[2%] sm:w-3 sm:h-[5%]" alt="your-image-description" />
          </div>
          <div className="w-[50%] sm:w-1/3 p-4">
            <h1 className='text-[#ed7fb2] text-base md:text-2xl font-extrabold leading-5 md:leading-10'>May 2017</h1>
            <p className='leading-4 md:leading-8'>
              Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
              at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>

          </div>
        </div>
        <p className='text-center pt-4' >To be continue…</p>
      </div>


      <section className="my-3 sm:my-10   max-w-screen-lg mx-auto h-[20%] rounded-xl">
        <div className="container  flex  py-12 items-center justify-center flex-col ">
          <div className="flex flex-col justify-center items-center text-center lg:w-2/3 w-full gap-7">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl
                 leading-14 bg-gradient-to-b from-[#D664A4] to-[#B856A9]
                   text-transparent bg-clip-text">Meet the team</h1>
            <img src={line} alt="" />
            <p className=" leading-5 sm:leading-10 font-normal text-base text-center items-center sm:w-[500px]">Meet the team that  makes the process of this system fast and painless as possible to provide you with good result
            </p>
          </div>
        </div>
      </section>

      <section className=" relative flex flex-wrap 3xl:w-1/3 ">
        <div className="h-[185px]  w-[299px] top-[20%] left-[15%]   z-10 bg-[#C4C4C4] shadow-lg  rounded-xl absolute hidden sm:block">
        </div>

        <div className="h-[233px]  w-[299px] top-[10%] left-[28%]  z-10 bg-[#C4C4C4]   shadow-lg    rounded-xl   absolute hidden sm:block">
        </div>
        <div className="h-[185px]  w-[299px] top-[20%] right-[15%]  z-10 bg-[#C4C4C4] shadow-lg  rounded-xl absolute hidden sm:block">
        </div>

        <div className="h-[233px]  w-[299px] right-[28%] top-[10%]   z-10   bg-[#C4C4C4]  shadow-lg   rounded-xl  absolute hidden sm:block">
        </div>

        <div className="flex   w-full justify-center items-center ">

          <div className="h-[285px] w-[299px]    z-20 bg-gradient-to-b from-[#f19aca] to-[#987fae]
                   text-transparent  rounded-xl  "   >
            <div className='relative w-[70%] h-[100%]'>

              <p className='text-white  items-end text-start absolute bottom-0 left-4 p-4'>CEO <br /> Amanda Roth</p>
            </div>
          </div>
        </div>
      </section>



      <div className="flex justify-center  items-center   bg-no-repeat  bg-cover h-[50%] md:bg-center"  >
        <div className="flex flex-col justify-center items-center text-center  max-w-7xl pt-56 pb-20 px-10">
          <h1 className="font-poppins font-bold text-[1.7rem] 
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                                text-transparent bg-clip-text">Subscribe our newsletter
          </h1>
          <img src={line} alt="" />
          <p className="mt-4 text-base md:w-[60%] font-normal text-black  leading-10">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
          <div className="sm:flex sm:flex-row gap-4 w-full sm:justify-center mt-11 sm:items-center flex flex-col justify-center items-center">
            <input type="text" id="hero-field" placeholder='EMAIL' name="hero-field" class="sm:w-[60%] w-[75%] text-black bg-gray-100 bg-opacity-50 rounded-full  focus:bg-transparent border border-fuchsia-800    outline-none font-normal text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <button className="inline-flex text-white border-0 py-2 px-4 h-fit w-fit focus:outline-none rounded-full text-sm sm:text-lg"

              style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}

            >DISCOVER</button>
          </div>
        </div>

      </div>

      <Footer />




    </>
  )
}

export default About