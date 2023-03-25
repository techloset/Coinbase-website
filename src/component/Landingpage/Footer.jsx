import React from 'react'
import FooterLogo from '../../images/landingpage/footerLogo.svg'
import socialmediaIcons from '../../images/landingpage/Social-Media-Icons.svg'

const Footer = () => {
    return (
        <div>
            <footer className="text-[#FFFFFF] body-font bg-[#151515]" >
                <div className="container px-5 pt-[80px] sm:pl-[81px] mx-auto text-left flex  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto items-center justify-center text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start  justify-center cursor-pointer">
                            <img src={FooterLogo} alt="" />
                        </a>
                        <p className="mt-8 text-sm leading-6 text-[#A2A2A2]"> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue.
                            Fusce vel metus pharetra, fermentum</p>
                            <img src={socialmediaIcons} alt="" className='mt-6 max-md:ml-[70px]'/>
                            <p className='font-normal text-sm opacity-40 mix-blend-normal mt-10 md:mt-24 mb-3'>© 2019 Designed by Cr8tiv_yemmy</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 hidden md:block">
                            <h2 className="title-font font-medium text-[#FFFFFF] tracking-widest text-md mb-7">CoinBaseLinks</h2>
                            <nav classNameName="list-none mb-10 text-sm ">
                                <ol>

                                    <a className="text-[#A2A2A2] leading-7 text-sm  ">Home</a>
                                </ol>
                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-sm ">About Us</a>
                                </ol>
                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-sm ">Blog</a>
                                </ol>
                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-sm ">Sell</a>
                                </ol>
                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-sm ">Contact Us</a>
                                </ol>
                            </nav>
                        </div>
                        <div className="lg:w-1/4  md:w-1/2 w-full px-4 hidden md:block">
                            <h2 className="title-font font-medium text-[#FFFFFF] tracking-widest text-lg mb-7">Contact Us</h2>
                            <nav classNameName="list-none mb-10 text-sm sm:flex flex-col">



                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-xs ">(+234) 137632128</a>
                                </ol>
                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-xs ">Coinbase@yahoo.com</a>
                                </ol>
                                <ol>
                                    <a className="text-[#A2A2A2] leading-7 text-xs ">Address goes here</a>
                                </ol>
                                <ol className=' mt-12'>
                                    <a className="text-[#A2A2A2]   text-xs ">Download Our App</a>
                                </ol>

                            </nav>
                        </div>
                        <section className='mx-auto sm:mx-auto max-md:hidden hidden xl:block  mr-[52px]'>
                            <div>

                                <h1 className='text-[#FFFFFF]'>CoinBase Instagram</h1>
                            </div>

                            <div className='grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-2 mt-6  justify-center'>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] flex items-center justify-center  font-light text-4xl'>+</div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                                <div className='w-[70px] h-[70px] bg-[#C4C4C4] '></div>
                            </div>


                        </section>



                    </div>
                </div>
                
            </footer>

        </div>
    )
}

export default Footer