import React from 'react'
import FooterLogo from '../../images/landingpage/footerLogo.svg'
import socialmediaIcons from '../../images/landingpage/Social-Media-Icons.svg'

const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font bg-gray-900" >
                <div className="container px-5 pt-[80px] pl-[81px] mx-auto text-left flex  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start  justify-center cursor-pointer">
                            <img src={FooterLogo} alt="" />
                        </a>
                        <p className="mt-8 text-sm leading-6 text-gray-400"> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue.
                            Fusce vel metus pharetra, fermentum</p>
                            <img src={socialmediaIcons} alt="" className='mt-4'/>
                            <p className='font-normal text-sm opacity-40 mix-blend-normal mt-24'>© 2019 Designed by Cr8tiv_yemmy</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 hidden md:block">
                            <h2 className="title-font font-medium text-white tracking-widest text-md mb-7">CoinBaseLinks</h2>
                            <nav classNameName="list-none mb-10 text-sm ">
                                <ol>

                                    <a className="text-gray-300 leading-7 text-sm hover:text-gray-400 ">Home</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-300 leading-7 text-sm hover:text-gray-400">About Us</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-300 leading-7 text-sm hover:text-gray-400">Blog</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-300 leading-7 text-sm hover:text-gray-400">Sell</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-300 leading-7 text-sm hover:text-gray-400">Contact Us</a>
                                </ol>
                            </nav>
                        </div>
                        <div className="lg:w-1/4  md:w-1/2 w-full px-4 hidden md:block">
                            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-7">Contact Us</h2>
                            <nav classNameName="list-none mb-10 text-sm sm:flex flex-col">



                                <ol>
                                    <a className="text-gray-300 leading-7 text-xs hover:text-gray-400">(+234) 137632128</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-300 leading-7 text-xs hover:text-gray-400">Coinbase@yahoo.com</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-300 leading-7 text-xs hover:text-gray-400">Address goes here</a>
                                </ol>
                                <ol className=' mt-12'>
                                    <a className="text-gray-300   text-xs hover:text-gray-400">Download Our App</a>
                                </ol>

                            </nav>
                        </div>
                        <section className='mx-auto sm:mx-auto max-md:hidden hidden xl:block  mr-[52px]'>
                            <div>

                                <h1>CoinBase Instagram</h1>
                            </div>

                            <div className='grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-2 mt-6  justify-center'>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                                <div className='w-[70px] h-[70px] bg-gray-300 flex items-center justify-center  font-light text-4xl'>+</div>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                                <div className='w-[70px] h-[70px] bg-gray-300 '></div>
                            </div>


                        </section>



                    </div>
                </div>
                
            </footer>

        </div>
    )
}

export default Footer