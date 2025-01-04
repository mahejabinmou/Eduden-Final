/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FreeWebinarCard = ({ category, time, title, img }) => {
  return (
    <div className="flex p-[15px] items-center justify-between bg-white  gap-[20px] rounded-[16px]">
      <div className="relative w-[250px] h-[120px]  sm:w-[300px] sm:h-[150px] lg:w-[200px] lg:h-[100px] xl:w-[200px] xl:h-[100px] 2xl:w-[272px] 2xl:h-[188px] flex items-center overflow-hidden">
        <img
          src={img}
          alt="webinar"
          className="rounded-[8px] object-cover w-full h-full"
        />
        <div className="absolute 2xl:top-[10px] 2xl:left-[10px] xl:top-[10px] xl:left-[10px] top-[6px] left-[6px] ">
          <p className="2xl:px-[12px] 2xl:py-[6px] px-[8px] py-[2px] text-[#010101] text-[12px] leading-[18px]  bg-[#00A4FF] rounded-[50px]">
            {" "}
            {category}
          </p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[#00A4FF] text-[12px]">{time}</p>
        </div>
        <div className="mt-1">
          <h4 className="text-[#1A1A1A] text-[14px] md:text-[16px] font-semibold font-sans">
            {title}
          </h4>
        </div>
        <div className="mt-2">
          <button className="max-w-[180px] bg-[#00A4FF1A]/[.1] text-[#010101] font-medium text-[12px] px-2 py-1 border border-[#00A4FF] rounded-[50px] w-full cursor-pointer hover:bg-[#00A4FF] ">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeWebinarCard;
