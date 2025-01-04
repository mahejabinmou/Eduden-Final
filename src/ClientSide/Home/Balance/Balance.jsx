import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Balance = () => {
  return (
    <div className="sectionGap grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px]">
      <div className="h-[600px]  rounded-[8px] border border-[#FFFFFF]/[.1] bg-[#FFFFFF]/[.05]">
        <img
          src="/balance.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="text-[#FFFFFF] ">
        <h1 className="pb-[20px]  popularCategoryHead ">Our Brance</h1>
        <p className="pb-[40px] joinClanSubPara font-lexend">
          Lorem ipsum dolor sit amet consectetur. Vel amet arcu ac risus eu
          dignissim mattis ut est. Amet amet eu turpis cras lacus. Tortor id
          consectetur ut odio ut congue posuere nulla. Sodales blandit sodales
          neque suscipit.
        </p>
        <div className="flex items-start  gap-[22px] pb-[40px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#FFFFFF] rounded-[36px]">
            <FaLocationDot className="text-[#00A4FF] h-[28px] w-[22px] " />
          </div>

          <div>
            <h1 className="pb-[12px] text-[24px] leading-[36px] font-[500px]">
              USA
            </h1>
            <p className="joinClanSubPara font-lexend">
              1729 N 2nd St Studio 204A,Minneapolis, MN 55411
            </p>
          </div>
        </div>
        <div className="flex items-start  gap-[22px] pb-[40px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#FFFFFF] rounded-[36px]">
            <FaLocationDot className="text-[#00A4FF] h-[28px] w-[22px] " />
          </div>

          <div>
            <h1 className="pb-[12px] text-[24px] leading-[36px] font-[500px]">
              India
            </h1>
            <p className="joinClanSubPara font-lexend">
              4/4E, Club Town Complex, Kolkata
            </p>
          </div>
        </div>
        <div className="flex items-start  gap-[22px] pb-[40px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#FFFFFF] rounded-[36px]">
            <FaLocationDot className="text-[#00A4FF] h-[28px] w-[22px] " />
          </div>

          <div>
            <h1 className="pb-[12px] text-[24px] leading-[36px] font-[500px]">
              Bangladesh
            </h1>
            <p className="joinClanSubPara font-lexend">
              4/4E, Club Town Complex,Mohammadpr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
