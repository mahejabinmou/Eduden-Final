import { HiOutlineMinusSmall } from "react-icons/hi2";
import { useState } from "react";

import UpComingCrsDetails from "../../../components/WhatsNew/UpComingCrsDetails";
import UpcomingCard from "../../../components/WhatsNew/UpcomingCard";
import handleMouseEnter from "../../../helpers/handleMouseEnter";
import { courses } from "../../../constant/dummyJson";

const AllCourses = () => {
  const [isHover, setIsHover] = useState("");

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

      <div className="grid grid-cols-4 gap-x-[26px]">
        {courses.map((courseDetails) => (
          <div
            className={`courses min-h-[500px] md:min-h-[680px] lg:min-h-[750px] 2xl:min-h-[0px] rounded-[20px] ${
              isHover === courseDetails.id && "upCmnhover"
            } cursor-pointer`}
            key={courseDetails.id}
            onMouseEnter={() => handleMouseEnter(courseDetails.id, setIsHover)}
            onMouseLeave={() => setIsHover("")}
          >
            {isHover !== courseDetails.id ? (
              <UpcomingCard {...courseDetails} />
            ) : (
              <UpComingCrsDetails
                crsDetails={courseDetails.crsDetails}
                title={courseDetails.title}
                rating={courseDetails.rating}
                price={courseDetails.price}
                category={courseDetails.category}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
