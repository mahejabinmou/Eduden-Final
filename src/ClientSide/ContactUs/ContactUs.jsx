import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[#1A1A1A] text-white p-[50px]  rounded-[10px] max-w-[523px] mb-[50px]">
        {/* Title */}
        <h2 className="subTitle mb-[50px]">Contact Us</h2>

        <div className="flex  gap-x-[30px] mb-[50px]">
          <div className="h-[60px] w-[60px]  bg-[#8EFA6D] rounded-full flex items-center justify-center">
            <FaPhoneAlt size={27} className="text-black" />
          </div>

          <div>
            <h1 className="subTitle pb-[12px]">Phone Number</h1>
            <p className="para pb-[8px]">+919547578920</p>
            <p className="para">+919547578920</p>
          </div>
        </div>

        <div className="flex  gap-x-[30px] mb-[50px]">
          <div className="h-[60px] w-[60px]  bg-[#8EFA6D] rounded-full flex items-center justify-center">
            <MdEmail size={27} className="text-black" />
          </div>

          <div>
            <h1 className="subTitle pb-[12px]">Email Address</h1>
            <p className="para 2xl:pb-[8px]">example@gmail.com</p>
            <p className="para">example@gmail.com</p>
          </div>
        </div>

        <div className="flex  gap-x-[30px] ">
          <div
            className="2xl:h-[60px] 2xl:w-[60px] xl:h-[60px] xl:w-[85px]
            lg:h-[60px] lg:w-[100px]  md:h-[60px] md:w-[100px] bg-[#8EFA6D] rounded-full flex items-center justify-center"
          >
            <FaLocationDot size={27} className="text-black" />
          </div>

          <div>
            <h1 className="subTitle pb-[12px]">Location</h1>
            <p className="para pb-[8px]">5678 Bangla Main Road, cities 580</p>
            <p className="para">GBnagla, example 54786</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
