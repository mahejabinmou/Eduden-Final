import { HiOutlineMinusSmall } from "react-icons/hi2";

const OurCollaboration = () => {
  return (
    <div className="text-[#FFFFFF] sectionGap ">
      <h1 className="testimonialSub mb-[20px] md:mb-[25px]  flex items-center justify-center text-[#00A4FF]">
        <span>
          <HiOutlineMinusSmall />{" "}
        </span>
        Our Partner{" "}
        <span>
          <HiOutlineMinusSmall />{" "}
        </span>
      </h1>
      <h1 className="popularCategoryHead mb-[35px] md:mb-[45px]  text-center">
        {" "}
        Our{" "}
        <span className="BorderGlobal  border-[#00A4FF]">Collaboration</span>
      </h1>
      <p className="joinClanSubPara  mb-[35px] text-center">
        Well, because we’re not your grandma’s boring old school! At Eduden,
        we’re the rebels of education, the mavericks of learning, and the
        champions of fun-filled knowledge. We’ll teach you how to slay dragons
        and code websites, all while cracking jokes and sipping on virtual
        coffee. So, why settle for snooze-worthy lectures when you can join the
        Eduden revolution? Let’s make learning epic together!Well, because we’re
        not your grandma’s boring old school! At Eduden, we’re the rebels of
        education, the mavericks of learning.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[32px]">
        <div className="py-[30px] px-[30px]  bg-[#FFFFFF0D] flex items-center justify-center">
          <img
            className=""
            src="https://i.ibb.co.com/s6mR8v2/group-1006-66f4c462be331.webp"
            alt=""
          />
        </div>
        <div className="py-[30px] px-[30px]  bg-[#FFFFFF0D] flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/BT4jTSc/group-150-66f4c4e2bdff1.webp"
            alt=""
          />
        </div>
        <div className="py-[30px] px-[30px]  bg-[#FFFFFF0D] flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/N9hDfXT/layer-1-2-66f4c5223ede6.webp"
            alt=""
          />
        </div>
        <div className="py-[30px] px-[30px]  bg-[#FFFFFF0D] flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/FHLkNRP/layer-1-4-66f4c5bdc0e71.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurCollaboration;
