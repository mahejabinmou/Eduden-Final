/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import Navbar from "../../Shared/Navbar/Navbar";
import { MdArrowDownward, MdArrowRightAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiYoutube } from "react-icons/ci";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="">
      <Navbar></Navbar>

      <div className="mt-[50px]  relative">
        {/* mobile */}
        {/* Slider Container */}
        <div className="slider-container  md:hidden block ">
          <Slider {...settings}>
            <div className="relative ">
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/sWxsjp8/rectangle-100-66f2fc7560a82.webp"})`,
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] md:h-[80vh]   lg:h-[100vh] 2xl:h-[100vh]"
              ></div>
            </div>
            {/* slider two */}
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/sWxsjp8/rectangle-100-66f2fc7560a82.webp"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] md:h-[80vh] xs:h-[65vh]  lg:h-[100vh]  "
              ></div>
            </div>

            {/* slider three */}
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/sWxsjp8/rectangle-100-66f2fc7560a82.webp"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] md:h-[80vh]  xs:h-[65vh] lg:h-[80vh]  "
              ></div>
            </div>
          </Slider>
        </div>

        {/* Slider Container big screen*/}
        <div className="slider-container  hidden md:block ">
          <Slider {...settings}>
            <div className="relative ">
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/sWxsjp8/rectangle-100-66f2fc7560a82.webp"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover h-[741px]"
              ></div>
              <div className="absolute inset-0 mx-[50px] ">
                <div>
                  <button className="py-[10px] px-[20px] text-[#A8FF57] border border-[#FFFFFF]/[0.5] rounded-[10px] heroSecSubHead mb-[25px] mt-[109px]">
                    WELCOME TO EDUDEN
                  </button>

                  <div className="flex flex-row justify-between items-center">
                    <h1
                      className="heroHead mb-[25px] text-[#FFFFFF] 2xl:max-w-[700px]
                    xl:max-w-[700px]  lg:max-w-[700px] max-w-[700px]"
                    >
                      Where Learning Meets Imagination & Innovation!
                    </h1>
                    <div className=" bg-[#A8FF57] px-[30px] pt-[50px] pb-[20px]  max-w-[46px] flex flex-col items-center space-y-[10px] rounded-[20px]">
                      {/* Rotated Text */}
                      <span className="transform rotate-90 heroSecSubHead mb-[30px] whitespace-nowrap">
                        follow now
                      </span>

                      {/* Arrow */}
                      <span className="transform rotate-[-90] text-black">
                        <MdArrowDownward className="" size={20} />
                      </span>

                      {/* Social Media Icons */}
                      <div className="flex flex-col space-y-[10px] items-center">
                        <div className="bg-black p-2 rounded-full text-white">
                          <FaFacebook size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <FaInstagram size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <CiYoutube size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <LiaLinkedinIn size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[604px]  joinClanSubPara  text-[#FFFFFF]">
                    we're your one-stop destination for unlocking your potential
                    and conquering the digital realm with confidence.
                  </p>
                </div>
                <button className="homeLargeAppoinMent mt-[35px] flex items-center justify-between text-[#010101] bg-[#A8FF57] font-bold">
                  Discover More
                </button>
              </div>
            </div>
            {/* slider two */}
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/sWxsjp8/rectangle-100-66f2fc7560a82.webp"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover h-[741px]"
              ></div>
              <div className="absolute inset-0 mx-[50px] ">
                <div>
                  <button className="py-[10px] px-[20px] text-[#A8FF57] border border-[#FFFFFF]/[0.5] rounded-[10px] heroSecSubHead mb-[25px] mt-[109px]">
                    WELCOME TO EDUDEN
                  </button>

                  <div className="flex flex-row justify-between items-center">
                    <h1 className="heroHead mb-[25px] text-[#FFFFFF] max-w-[738px]">
                      Where Learning Meets Imagination & Innovation!
                    </h1>
                    <div className=" bg-[#A8FF57] px-[30px] pt-[50px] pb-[20px]  max-w-[46px] flex flex-col items-center space-y-[10px] rounded-[20px]">
                      {/* Rotated Text */}
                      <span className="transform rotate-90 heroSecSubHead mb-[30px] whitespace-nowrap">
                        follow now
                      </span>

                      {/* Arrow */}
                      <span className="transform rotate-[-90] text-black">
                        <MdArrowDownward className="" size={20} />
                      </span>

                      {/* Social Media Icons */}
                      <div className="flex flex-col space-y-[10px] items-center">
                        <div className="bg-black p-2 rounded-full text-white">
                          <FaFacebook size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <FaInstagram size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <CiYoutube size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <LiaLinkedinIn size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[604px]  joinClanSubPara  text-[#FFFFFF]">
                    we're your one-stop destination for unlocking your potential
                    and conquering the digital realm with confidence.
                  </p>
                </div>
                <button className="homeLargeAppoinMent mt-[35px] flex items-center justify-between text-[#010101] bg-[#A8FF57] font-bold">
                  Discover More
                </button>
              </div>
            </div>

            {/* slider three */}
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${"https://i.ibb.co.com/sWxsjp8/rectangle-100-66f2fc7560a82.webp"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover h-[741px]"
              ></div>
              <div className="absolute inset-0 mx-[50px] ">
                <div>
                  <button className="py-[10px] px-[20px] text-[#A8FF57] border border-[#FFFFFF]/[0.5] rounded-[10px] heroSecSubHead mb-[25px] mt-[109px]">
                    WELCOME TO EDUDEN
                  </button>

                  <div className="flex flex-row justify-between items-center">
                    <h1
                      className="heroHead mb-[25px] text-[#FFFFFF] max-w-[738px]
                   "
                    >
                      Where Learning Meets Imagination & Innovation!
                    </h1>
                    <div className=" bg-[#A8FF57] px-[30px] pt-[50px] pb-[20px]   flex flex-col items-center space-y-[10px] rounded-[20px]">
                      {/* Rotated Text */}
                      <span className="transform rotate-90 heroSecSubHead mb-[30px] whitespace-nowrap">
                        follow now
                      </span>

                      {/* Arrow */}
                      <span className="transform rotate-[-90] text-black">
                        <MdArrowDownward className="" size={20} />
                      </span>

                      {/* Social Media Icons */}
                      <div className="flex flex-col space-y-[10px] items-center">
                        <div className="bg-black p-2 rounded-full text-white">
                          <FaFacebook size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <FaInstagram size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <CiYoutube size={20} />
                        </div>
                        <div className="bg-black p-2 rounded-full text-white">
                          <LiaLinkedinIn size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[604px]  joinClanSubPara  text-[#FFFFFF]">
                    we're your one-stop destination for unlocking your potential
                    and conquering the digital realm with confidence.
                  </p>
                </div>
                <button className="homeLargeAppoinMent mt-[35px] flex items-center justify-between text-[#010101] bg-[#A8FF57] font-bold">
                  Discover More
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
