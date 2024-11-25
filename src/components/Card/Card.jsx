/* eslint-disable no-unused-vars */

import { FaStar } from "react-icons/fa";
import CardFotter from "../WhatsNew/CardFotter";
import { useState } from "react";
import TitleContainer from "../../ClientSide/Shared/TitleContainer/TitleContainer";

/* eslint-disable react/prop-types */
const Card = ({
  category,
  title,
  price,
  image,
  description,
  crsDetails,
  img,
  slider,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="w-full sm:min-h-[660px]  sm:h-[660px] bg-white rounded-[20px] flex flex-col gap-3 justify-between group hover:bg-[#A8FF57] flex-grow-0 flex-shrink-0 transition-all duration-500 ease-in-out box-borders">
        {/* Content shown when not hovered */}
        <div className="group-hover:hidden block transition-opacity duration-500 ease-in-out">
          <div className="relative bg-black">
            <img
              src="/assets/images/picture.png"
              alt="picture"
              className="w-full rounded-t-[20px] max-h-[296px] transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="w-[60px] h-[60px] md:w-[102px] md:h-[102px] rounded-full bg-black absolute bottom-0 flex items-center justify-center right-[35px] translate-y-1/2 font-bold text-[#93DF4C] font-gucina text-[20px] md:text-[35px]">
              {price}
            </div>
          </div>
          <div className="px-[25px] mt-10 md:mt-[68px]">
            <div>
              <div className="flex items-center justify-between">
                <p className="p-[5px] bg-black text-[14px] md:text-[20px] font-bold text-[#A8FF57] rounded-[50px]">
                  {category}
                </p>
                <div className="flex items-center gap-[2px]">
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-[25px]">
              <h3 className="font-gucina text-[20px] text-[#010101] font-bold">
                {title}
              </h3>
              <p className="text-black text-[12px] md:text-[14px] mt-[6px] md:mt-[15px] font-sans">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Content shown on hover */}
        <div className="px-[25px] pt-[30px] group-hover:block hidden transition-opacity duration-500 ease-in-out">
          <div>
            <div className="flex items-center justify-between">
              <p className="p-[5px] bg-black text-[14px] md:text-[20px] font-bold text-[#A8FF57] rounded-[50px]">
                {category}
              </p>
              <div className="flex items-center gap-[2px]">
                <FaStar color="black" />
                <FaStar fill="black" />
                <FaStar fill="black" />
                <FaStar fill="black" />
                <FaStar fill="black" />
              </div>
            </div>
            <h2 className="font-bold text-[30px] mt-[35px] font-gucina leading-[34.5px] text-black">
              {title}
            </h2>
            <p className="mt-[14px] text-[14px] font-sans text-[#010101] leading-[21px]">
              {crsDetails}
            </p>
            <div>
              <div className="mt-10 flex items-center justify-between ">
                <TitleContainer
                  title={"Enroll Now"}
                  className={
                    "px-[18px] py-2 bg-[#000] text-[#A8FF57] rounded-[50px] text-nowrap cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 text-[14px] md:text-[20px]"
                  }
                  handler={() => {}}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 60"
                  className="w-12 h-12 text-black transition-transform duration-500 ease-in-out hover:scale-125"
                >
                  <line
                    x1="0"
                    y1="30"
                    x2="170"
                    y2="30"
                    stroke="black"
                    strokeWidth="3"
                  />
                  <polygon points="170,30 150,20 150,40" fill="black" />
                </svg>

                <TitleContainer
                  title={price}
                  className={
                    "px-[18px] py-2 text-[#A8FF57] rounded-[50px] bg-[#010101] text-[16px] font-gucina font-bold"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-[25px]">
          {slider && <div className="h-[1px] bg-[#010101] mb-[15px]"></div>}
          <div
            className={` mt-[22px] ${
              slider
                ? "my-[15px]"
                : "py-[15px] border-t-[1px]  border-t-[#010101]"
            }`}
          >
            <CardFotter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
