import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className="sectionGap">
      <div className=" text-white grid grid-cols-1 lg:grid-cols-3 gap-[36px] items-center    ">
        {/* Title */}

        <div className="bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px] pr-[57px] ">
          <div className="h-[60px] w-[60px] mb-[16px] bg-[#8EFA6D] rounded-full flex items-center justify-center">
            <FaPhoneAlt size={27} className="text-black " />
          </div>

          <div>
            <h1 className="subTitle pb-[12px]">Our Phone Number</h1>
            <p className="para pb-[8px]">+919547578920</p>
            <p className="para">+919547578920</p>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px]  pr-[57px]">
          <div className="h-[60px] w-[60px] mb-[16px] bg-[#8EFA6D] rounded-full flex items-center justify-center">
            <MdEmail size={27} className="text-black" />
          </div>

          <div>
            <h1 className="subTitle pb-[12px]">Our Email Address</h1>
            <p className="para pb-[8px]">example@gmail.com</p>
            <p className="para">example@gmail.com</p>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px] pr-[57px] ">
          <div className="h-[60px] w-[60px] mb-[16px] bg-[#8EFA6D] rounded-full flex items-center justify-center">
            <FaLocationDot size={27} className="text-black" />
          </div>

          <div>
            <h1 className="subTitle pb-[12px]">Our Location</h1>
            <p className="para pb-[8px]">5678 Bangla Main Road, cities 580</p>
            <p className="para">GBnagla, example 54786</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
