// eslint-disable-next-line no-unused-vars
import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E]  text-white/[.8]">
      {/* foooter content */}
      <div className=" pt-[50px]">
        <div className="md:hidden block ">
          <div className=" pb-[25px] grid grid-cols-1 px-[51px]  gap-y-[50px]">
            <div className="">
              <div className="footerLogoparent mb-[30px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                  alt=""
                />
              </div>

              <div className=" ">
                <p
                  className="text-[14px] leading-[20px] pb-[30px]
    xs:text-[14px] xs:leading-[20px] xs:pb-[30px] text-white/[.8]"
                >
                  Travel Blog Elementor Template Kit. Powered by Design8. All
                  rights reserved.
                </p>
                <div className="flex   pb-[10px] gap-x-[10px]">
                  <a href="">
                    <FaFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a href="">
                    <FaInstagram size={28} className="footerSocailIcon" />
                  </a>

                  <a href="">
                    <FaWhatsapp size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle ">Category</h2>
              <Link to="/About">
                <p className="footerMenuText ">Immigration</p>
              </Link>
              <Link to="/service">
                <p className="footerMenuText">Study Abroad</p>
              </Link>
              <Link to="/membership">
                {" "}
                <p className="footerMenuText">Uncategorized</p>
              </Link>
              <Link to="/event">
                {" "}
                <p className="footerMenuText">Scholarship</p>
              </Link>
              <Link to="/contact">
                <p className="footerMenuText">News</p>
              </Link>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Latest Post</h2>
              <p className="footerMenuText">Study in China</p>
              <p className="footerMenuText">ulbright Scholarships in China</p>
              <p className="footerMenuText">
                How to Apply to Foreign Universities
              </p>
            </div>

            <div className="text-white/[.8]">
              <h2 className="footerMenuTextTitle">Contact Us</h2>
              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[24px] w-[24px] object-cover"
                  src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                  alt=""
                />
                <span className=" footerMenuText text-white/[.8]">
                  Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212,
                  (Near American Embassy)
                </span>
              </p>

              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[24px] w-[24px] object-cover"
                  src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                  alt=""
                />
                <span className="footerMenuText">+880 1607-002687</span>
              </p>
              <p className=" flex items-start gap-x-[10px]">
                <img
                  className="h-[16px] w-[16px] "
                  src="https://i.ibb.co/tKvY3Q7/group-2-66d945203a8b4.webp"
                  alt=""
                />
                <span className="footerMenuText">
                  info@northwayglobal.com.bd
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* large */}
        <div className="hidden md:block sectionGap">
          <div
            className=" pb-[25px] grid grid-cols-2 lg:grid-cols-4 items-center justify-center 
          gap-x-[243px]"
          >
            <div>
              <div className="footerLogoparent mb-[25px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                  alt=""
                />
              </div>

              <div className=" ">
                <p className="footerHeaderLogoText text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
                <div className="flex  flex-row mt-[20px] gap-x-[10px]">
                  <a
                    href="  "
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-[20px] py-[8px]"
                  >
                    <SlSocialFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-[20px] py-[8px]"
                  >
                    <FaInstagram size={28} className="footerSocailIcon" />
                  </a>

                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-[20px] py-[8px]"
                  >
                    <CiYoutube size={28} className="footerSocailIcon" />
                  </a>
                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-[20px] py-[8px]"
                  >
                    <SlSocialLinkedin size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle ">Quick Link</h2>
              <Link to="/About">
                <p className="footerMenuText ">Home</p>
              </Link>
              <Link to="/service">
                <p className="footerMenuText">About</p>
              </Link>
              <Link to="/membership">
                {" "}
                <p className="footerMenuText">Courses</p>
              </Link>
              <Link to="/event">
                {" "}
                <p className="footerMenuText">Contact</p>
              </Link>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Learning platform</h2>
              <p className="footerMenuText">YouTube</p>
              <p className="footerMenuText">Facebook</p>
              <p className="footerMenuText">Instagram</p>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Get In Touch</h2>
              <div className=" md:pb-[10px] lg:pb-[10px] xl:pb-[10px] 2xl:pb-[10px]">
                <p
                  className=" text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] "
                >
                  Phone:
                </p>
                <p
                  className=" text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
    "
                >
                  01745349414
                </p>
              </div>

              <div className=" ">
                <p
                  className=" footerMenuText
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] "
                >
                  Email:
                </p>
                <p
                  className=" footerMenuText
    "
                >
                  bd@eduden.com
                </p>
              </div>
              <div className=" md:pb-[10px] lg:pb-[10px] xl:pb-[10px] 2xl:pb-[10px]">
                <p
                  className=" text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] "
                >
                  Location:
                </p>
                <p
                  className=" text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
    "
                >
                  Dhaka, kollanpur, bridge er niche.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-1 border-white/[.1]" />

        <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
          <div
            className="flex justify-center items-center space-x-[40px]
          "
          >
            <p
              className="copyWritePara
 "
            >
              Copyright © 2024 Edu Den Powered by Ethical Den
              {/* <span>
                <Link
                  to="https://www.ethicalden.com/"
                  target="_blank"
                  className="underline"
                >
                  Ethical Den
                </Link>
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
