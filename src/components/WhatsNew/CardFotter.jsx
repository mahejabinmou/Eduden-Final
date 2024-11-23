import { CiClock2 } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";

const CardFotter = () => {
  return (
    <div className="slider-svg flex items-center justify-between mt-3 border-t-[1px] border-t-[#010101] mr-[25px] pt-[10px] ">
      <div className="flex items-center gap-[5px] font-[300] text-[14px]">
        <TiGroupOutline color="black" size={20} />
        <p className="text-[#010101]">25</p>
      </div>
      <div className="flex items-center gap-[5px]  font-[300] text-[14px] text-[#010101]">
        <CiClock2 color="black" />

        <p>36hr</p>
      </div>
      <div className="flex items-center gap-[5px] font-[300] text-[14px] text-[#010101]">
        <FaRegComments color="black" />
        <p className="text-[#010101]">25k</p>
      </div>
    </div>
  );
};

export default CardFotter;
