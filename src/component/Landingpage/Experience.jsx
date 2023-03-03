import React from 'react'

const Experience = () => {
  return (
    <div>
     
<section className=" body-font ">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="font-poppins font-bold text-2xl  leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB] text-transparent bg-clip-text mb-4">Great experience <br /> with CoinBase</h1>
        <img src="navimg/Line.png" alt="" />
        <p className="leading-relaxed mb-4">CoinBase is an online site and a p2admin platform that allows users to buy,
         sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.</p>
       
        <div className="flex">
        <button className="flex gap-16 text-white font-poppins cursor-pointer rounded-full text-lg  border-0 py-2 px-6  "  style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>DISCOVER</button>
                </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[50%] h-[30%] object-cover object-center rounded" src="navimg/Ñëîé.png" />
    </div>
  </div>
</section>






      {/* Trade from anywhere */}

      <div className='bg-center  flex justify-center items-center '
        style={{
          height: '550px', backgroundImage: 'url("navimg/BGG.png")',
          backgroundSize: "cover", marginTop: '80px'
        }}
      >
        <div className=' bg-white  w-3/4 h-96 mt-6  shadow-lg rounded-2xl  '>
          <div className='flex text-center justify-center mt-10'>

            <h4 className="font-poppins font-bold text-2xl 
                 leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text">
              Trade from anywhere
            </h4>
          </div>
              <img src="navimg/Line.png" alt="" class="mx-auto my-auto mt-4" style={{width:'50px',heigth:'0px' , alignItems:'center',justifyContent:'center'}} />
          <div className='flex flex-row justify-center mt-16 align-baseline gap-14'>

          <div className='border-fuchsia-800 border  rounded-xl w-44 h-44 flex flex-col justify-center text-center items-center gap-8'>
            <img src="navimg/Bitcoin.png" alt="" width='40px' heigth='40px'/>
            <p  className='font-bold text-md'>Bitcoin</p>
          </div>
          <div className='border-fuchsia-800 border  rounded-xl w-44 h-44 flex flex-col justify-center text-center items-center gap-8'>
            <img src="navimg/Gift cards.png" alt="" style={{width:'50px',height:'30px'}} />
            <p className='font-bold text-md'>Gift Cards</p>
          </div>
          </div>


        </div>

      </div>


    </div>

  )
}

export default Experience