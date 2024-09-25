import { HiOutlineMinusSmall } from "react-icons/hi2";

const AllCourses = () => {
  return (
    <div className="sectionGap text-[#FFFFFF]">
      <h1 className="joinClanPara mb-[25px]  flex items-center justify-center text-[#A8FF57]">
        <span>
          <HiOutlineMinusSmall />{" "}
        </span>
        Popular Categories{" "}
        <span>
          <HiOutlineMinusSmall />{" "}
        </span>
      </h1>
      <h1 className="joinClanHead mb-[80px] text-center">
        {" "}
        All <span className="border-b-4 border-[#A8FF57]">Courses</span>{" "}
      </h1>

      <div className="flex flex-row gap-x-[20px] text-white group">
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]">
          Show All
        </button>
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]">
          Graphicis Design
        </button>
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]">
          Ux/Ui Design
        </button>
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]">
          Web Development
        </button>
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#553030]">
          Mobile App Development
        </button>
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]">
          Programming
        </button>
        <button className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]">
          Ethical Hacking
        </button>
      </div>
    </div>
  );
};

export default AllCourses;
