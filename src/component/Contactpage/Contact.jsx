import React from "react";
import Footer from "../Landingpage/Footer";
import Navbar from "../Landingpage/Navbar";
import "./Contact.css";
import bg from "../../images/contactpage/BG.svg";
import contact from "../../images/contactpage/contact.svg";
import mapp from "../../images/contactpage/MapMap.svg";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div
        className="md:justify-evenly  flex w-full  bg-cover bg-center  max-md:items-center  max-md:flex-col-reverse bgImg1 h-[800px]"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="flex flex-col text-white   lg:pt-36  max-lg:pt-32 max-md:pt-0 gap-5 sm:gap-3 md:gap-6 px-8 sm:w-[540px] ">
          <p className="text-xs font-normal">HOME/CONTACT US</p>

          <h6 className="font-poppins text-2xl  font-bold sm:text-4xl sm:leading-[2.6rem]">
            24/7 Customer support Including weekends.
          </h6>
          <p className="text-xs sm:text-lg font-normal  sm:leading-5">
            We’re always there ti help regardless the number of queries at hand.
          </p>
        </div>
        <div className="">
          <img src={contact} alt="" className="mt-[40px] max-md:w-[350px]" />
        </div>
      </div>
      <div className="flex flex-col md:mx-10 text-center max-md:hidden md:block  justify-center mb-12">
        <p className=" leading-relaxed   text-center text-base">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <>
        <>
          <div className="flex justify-center items-center pb-5 md:pb-20   w-full">
            <div className="flex flex-wrap w-[50%] max-md:flex-col">
              <div className="p-2 md:w-1/2 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name *"
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
              <div className="p-2 md:w-1/2">
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  name="email"
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full mt-[30px]">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Comment"
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="p-2 mt-5 w-full">
                <button
                  className="lg:w-36 max-lg:w-36 w-[157px] h-[54px] text-white font-poppins cursor-pointer rounded-full lg:text-lg max-lg:text-base"
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                  }}
                >
                  PUBLISH
                </button>
              </div>
            </div>
          </div>
        </>
      </>

      <div className="flex justify-center items-center w-full mb-10 md:mb-20">
        <img src={mapp} className="w-[50%]" alt="" />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
