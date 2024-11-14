// eslint-disable-next-line no-unused-vars
import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" section ">
      {/* foooter content */}
      <div className=" relative md:hidden block ">
        <div
          style={{
            backgroundImage: `url("https://i.ibb.co.com/wBkKgnw/group-1088-66f6576d0b079.webp")`,
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[900px]  flex justify-center items-center"
        ></div>
        <div className="absolute inset-0  sectionGap text-white/[.8]">
          <div className=" pb-[25px] grid grid-cols-1 px-[51px]  gap-y-[50px]">
            <div className="">
              <div className="footerLogoparent mb-[25px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                  alt=""
                />
              </div>

              <div className="flex  flex-row mt-[20px] gap-x-[10px]">
                <a
                  href="  "
                  className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                >
                  <SlSocialFacebook size={28} className="footerSocailIcon" />
                </a>
                <a
                  href=""
                  className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                >
                  <FaInstagram size={28} className="footerSocailIcon" />
                </a>

                <a
                  href=""
                  className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                >
                  <CiYoutube size={28} className="footerSocailIcon" />
                </a>
                <a
                  href=""
                  className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                >
                  <SlSocialLinkedin size={28} className="footerSocailIcon" />
                </a>
              </div>
            </div>

            <div className="">
              <h2 className="footerMenuTextTitle">Quick Link</h2>
              <Link to="/About">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px] ">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  Home
                </p>
              </Link>
              <Link to="/service">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  About
                </p>
              </Link>
              <Link to="/courses">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  Courses
                </p>
              </Link>
              <Link to="/contactus">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  Contact
                </p>
              </Link>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Learning platform</h2>

              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                <span>
                  <img
                    className="w-[16px] h-[16px] "
                    src="https://i.ibb.co.com/S3ST2gG/group-4-66fa406b5db94.webp"
                    alt=""
                  />
                </span>
                YouTube
              </p>

              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                <span>
                  <img
                    className="w-[16px] h-[16px] "
                    src="https://i.ibb.co.com/z8tBgyH/group-5-66fa4117cfb29.webp"
                    alt=""
                  />
                </span>
                Facebook
              </p>
              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                <span>
                  <img
                    className="w-[16px] h-[16px] "
                    src="https://i.ibb.co.com/dbgJ823/group-1041-66fa414b43acc.webp"
                    alt=""
                  />
                </span>
                Instagram
              </p>
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
          <hr className="border-1 border-[#FFFFFF]" />

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
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* large */}
      <div className="relative hidden md:block ">
        <div
          style={{
            backgroundImage: `url("https://i.ibb.co.com/wBkKgnw/group-1088-66f6576d0b079.webp")`,
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[486px] flex justify-center items-center"
        ></div>

        <div className="absolute inset-0   sectionGap text-white/[.8]">
          <div className="mb-[25px] grid grid-cols-2 lg:grid-cols-4 justify-between items-start gap-x-[100px] ">
            <div className="">
              <div className="footerLogoparent mb-[25px]">
                <img
                  className="h-full w-full"
                  src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                  alt=""
                />
              </div>
              <div className="">
                <p className="footerHeaderLogoText text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
                <div className="flex flex-row mt-[20px] gap-x-[10px]">
                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                  >
                    <SlSocialFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                  >
                    <FaInstagram size={30} className="footerSocailIcon" />
                  </a>
                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                  >
                    <CiYoutube size={28} className="footerSocailIcon" />
                  </a>
                  <a
                    href=""
                    className="bg-[#A8FF57] text-[#030303] px-[8px] rounded-full py-[8px]"
                  >
                    <SlSocialLinkedin size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="footerMenuTextTitle">Quick Link</h2>
              <Link to="/About">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  Home
                </p>
              </Link>
              <Link to="/about">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  About
                </p>
              </Link>
              <Link to="/courses">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  Courses
                </p>
              </Link>
              <Link to="/contactus">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  <span>
                    <img
                      className="w-[9px] h-[9px] "
                      src="https://i.ibb.co.com/b294MBZ/vector-29-66fa3e2be48bf.webp"
                      alt=""
                    />
                  </span>
                  Contact
                </p>
              </Link>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Learning platform</h2>

              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                <span>
                  <img
                    className="w-[20px] h-[20px] "
                    src="https://i.ibb.co.com/S3ST2gG/group-4-66fa406b5db94.webp"
                    alt=""
                  />
                </span>
                YouTube
              </p>

              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                <span>
                  <img
                    className="w-[20px] h-[20px] "
                    src="https://i.ibb.co.com/z8tBgyH/group-5-66fa4117cfb29.webp"
                    alt=""
                  />
                </span>
                Facebook
              </p>
              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                <span>
                  <img
                    className="w-[20px] h-[20px] "
                    src="https://i.ibb.co.com/dbgJ823/group-1041-66fa414b43acc.webp"
                    alt=""
                  />
                </span>
                Instagram
              </p>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Get In Touch</h2>
              <div className="md:pb-[10px]">
                <p className="text-[14px] leading-[21px] font-gucina font-bold text-white md:pb-[2px]">
                  Phone:
                </p>
                <p className="text-[14px] leading-[21px] font-gucina font-bold text-white">
                  01745349414
                </p>
              </div>

              <div className="">
                <p className="footerMenuText md:pb-[2px]">Email:</p>
                <p className="footerMenuText">bd@eduden.com</p>
              </div>

              <div className="md:pb-[10px]">
                <p className="text-[14px] leading-[21px] font-gucina font-bold text-white md:pb-[2px]">
                  Location:
                </p>
                <p className="text-[14px] leading-[21px] font-gucina font-bold text-white">
                  Dhaka, kollanpur, bridge er niche.
                </p>
              </div>
            </div>
          </div>
          <hr className="border-1 border-[#FFFFFF]" />

          <div className="pt-[25px] px-[30px] 2xl:pt-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
            <div className="flex justify-center items-center space-x-[40px]">
              <p className="copyWritePara">
                Copyright © 2024 Edu Den Powered by Ethical Den
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
