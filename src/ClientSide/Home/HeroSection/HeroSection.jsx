/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdArrowDownward } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from "../../Shared/Navbar/Navbar";
import "./hero.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="">
      <Navbar></Navbar>

      <div className=" xl:mt-[25px] lg:mt-[20px] mt-[10px] relative">
        {/* mobile */}
        {/* Slider Container */}
        <div className="slider-container  md:hidden block ">
          <div
            className="absolute inset-0 z-10  px-[30px] md:px-[32px] lg:px-[60px] xl:px-[100px]
           2xl:px-[150px]  "
          >
            <div className="absolute inset-0 mx-[30px]  lg:mx-[50px] ">
              <div>
                <button className="py-[10px] px-[20px]  text-[#00A4FF] border border-white/[0.5] rounded-[10px] heroSecSubHead mb-[20px] mt-[35px]">
                  WELCOME TO EDUDEN
                </button>
                {/* <button className="py-[10px] px-[20px]  text-[#A8FF57] border border-[#FFFFFF]/[0.5] rounded-[10px] heroSecSubHead mb-[20px] mt-[35px]">
									WELCOME TO EDUDEN
								</button> */}

                <h1 className="heroHead  text-[#FFFFFF] max-w-[500px] pb-[5px]">
                  Where Learning Meets Imagination & Innovation!
                </h1>

                <p className="max-w-[604px]  HomeBannerPara  text-[#FFFFFF]">
                  we're your one-stop destination for unlocking your potential
                  and conquering the digital realm with confidence.
                </p>
              </div>
              <button className="homeLargeAppoinMent mt-[20px] px-[16px] py-[5px] flex items-center justify-between text-[#010101] bg-[#00A4FF] font-bold mb-[35px]">
                Discover More
              </button>
            </div>
          </div>

          <Slider {...settings}>
            <div className="relative ">
              <div
                style={{
                  backgroundImage: `url(${"/assets/images/new-changes/home-hero-1.png"})`,
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[300px]  "
              ></div>
            </div>
            {/* slider two */}
            <div className="relative ">
              <div
                style={{
                  backgroundImage: `url(${"/assets/images/new-changes/home-hero-3.png"})`,
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[300px] opacity-[0.3] "
              ></div>
            </div>
            {/* slider three */}
            <div className="relative ">
              <div
                style={{
                  backgroundImage: `url(${"/assets/images/HomeBanner.png"})`,
                }}
                className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[300px]  "
              ></div>
            </div>
          </Slider>
        </div>

        {/* Slider Container big screen*/}
        <div className="slider-container  hidden md:block">
          <div
            className="absolute inset-0 z-10 px-[30px] md:px-[50px] lg:px-[60px] xl:px-[100px]
           2xl:px-[150px]  "
          >
            <div>
              <button className="py-[10px] px-[20px] text-[#00A4FF] border border-white/[0.5]  rounded-[10px] heroSecSubHead mb-[25px] mt-[109px]">
                WELCOME TO EDUDEN
              </button>

              <div className="flex flex-row justify-between items-center">
                <h1
                  className="heroHead  text-[#FFFFFF] 2xl:max-w-[700px]
                    xl:max-w-[700px]  lg:max-w-[700px] max-w-[700px]"
                >
                  Where Learning Meets Imagination & Innovation!
                </h1>
                <div className=" bg-[#00A4FF] px-[30px] pt-[60px] pb-[20px]  max-w-[46px] flex flex-col items-center space-y-[14px] rounded-full">
                  {/* Rotated Text */}
                  <span className="transform rotate-90 heroSecSubHead text-[#010101] mb-[30px] whitespace-nowrap">
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
                    {/* <div className="bg-black p-2 rounded-full text-white">
                      <CiYoutube size={20} />
                    </div> */}
                    <div className="bg-black p-2 rounded-full text-white">
                      <LiaLinkedinIn size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <p className="max-w-[604px]   HomeBannerPara  text-[#FFFFFF]">
                we're your one-stop destination for unlocking your potential and
                conquering the digital realm with confidence.
              </p>
            </div>
            <button className="homeLargeAppoinMent mt-[50px] flex items-center justify-between  bg-[#00A4FF] text-[#010101]   ">
              Discover More
            </button>
          </div>

          <Slider {...settings}>
            <div className="relative ">
              <div
                style={{
                  backgroundImage: `url(${"/assets/images/new-changes/home-hero-1.png"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover h-[741px]"
              ></div>
            </div>
            {/* slider two */}
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${"/assets/images/new-changes/home-hero-3.png"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover h-[741px] opacity-[0.3]"
              ></div>
            </div>
            {/* slider three*/}
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${"/assets/images/HomeBanner.png"})`,
                }}
                className="
          bg-no-repeat bg-center bg-cover h-[741px]"
              ></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
