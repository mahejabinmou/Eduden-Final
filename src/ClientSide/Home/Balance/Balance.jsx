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
          Our branches are dedicated to providing top-quality education and
          support to learners everywhere. At edu Den, we combine advanced
          technology with expert instructors, affordable pricing, and a
          commitment to innovation ensuring students to achieve their goals.
        </p>
        <div className="flex items-start  gap-[22px] pb-[40px]">
          <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] lg:w-[85px] lg:h-[65px] md:w-[60px] md:h-[60px] sm:w-[60px] sm:h-[60px] ts:w-[60px] ts:h-[40px] w-[60px] h-[40px] flex justify-center items-center bg-[#FFFFFF] rounded-[36px]">
            <FaLocationDot className="text-[#00A4FF] h-[18px] w-[18px] md:h-[28px] md:w-[22px] " />
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
          <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[90px] xl:h-[60px] lg:w-[120px] lg:h-[65px] md:w-[60px] md:h-[60px] sm:w-[60px] sm:h-[60px]  w-[90px] h-[40px]   flex justify-center items-center bg-[#FFFFFF] rounded-[36px]">
            <FaLocationDot className="text-[#00A4FF] h-[18px] w-[18px] md:h-[28px] md:w-[22px] " />
          </div>

          <div>
            <h1 className="pb-[12px] text-[24px] leading-[36px] font-[500px]">
              India
            </h1>
            <p className="joinClanSubPara font-lexend">
              Astra Towers, ANO - 312, Newtown, Kolkata, West Bengal 700135,
              India
            </p>
          </div>
        </div>
        <div className="flex items-start  gap-[22px] pb-[40px]">
          <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[85px] xl:h-[60px] lg:w-[115px] lg:h-[65px] md:w-[60px] md:h-[60px] sm:w-[60px] sm:h-[60px] w-[80px] h-[40px] flex justify-center items-center bg-[#FFFFFF] rounded-[36px]">
            <FaLocationDot className="text-[#00A4FF] h-[18px] w-[18px] md:h-[28px] md:w-[22px] " />
          </div>

          <div>
            <h1 className="pb-[12px] text-[24px] leading-[36px] font-[500px]">
              Bangladesh
            </h1>
            <p className="joinClanSubPara font-lexend">
              24/A , Road Number 6, Nabinagar Housing, Mohammadpur, Dhaka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
