/* eslint-disable react/prop-types */
import { useState } from "react";

const FoundationCourse = ({ course }) => {
  const [activeButton, setActiveButton] = useState("Admission"); // Default active button

  return (
    <div className="sectionGap bg-[#010101] flex flex-col-reverse  xl:grid   xl:grid-cols-2 gap-[80px]">
      <div>
        <h1 className="text-[#FFFFFF] popularCategoryHead pb-[16px]">
          {/* UI/UX Design */}
          {course.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] pb-[20px]">
          <div className="flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]">
            <p className="text-[#FFFFFFCC] joinClanSubPara font-lexend">
              Duration
            </p>
            <p className="text-[#FFFFFFCC] courseDetailsPara font-lexend">
              {course.duration}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]">
            <p className="text-[#FFFFFFCC] joinClanSubPara">Lecture</p>
            <p className="text-[#FFFFFFCC] courseDetailsPara font-lexend">
              {course.lecture}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]">
            <p className="text-[#FFFFFFCC] joinClanSubPara font-lexend">
              Projects
            </p>
            <p className="text-[#FFFFFFCC] courseDetailsPara font-lexend">
              {course.projects}
            </p>
          </div>
        </div>
        <p className="text-[#FFFFFFCC] joinClanSubPara pb-[30px]">
          {course.para}
        </p>

        {/* <div className="flex flex-row gap-[16px] ">
          <button className="px-[16px] py-[10px] md:px-[25px] md:py-[6px]  rounded-[50px] CourseUi text-white bg-[#1A1A1A]  hover:bg-[#00A4FF] hover:text-[#010101]">
            Admission
          </button>
          <button className="px-[16px] py-[10px]  rounded-[50px] CourseUi text-white bg-[#1A1A1A]  hover:bg-[#00A4FF] hover:text-[#010101]">
            Join free seminar
          </button>
        </div> */}

        <div className="flex flex-row gap-[16px]">
          <button
            onClick={() => setActiveButton("Admission")}
            className={`px-[16px] py-[10px] md:px-[25px] md:py-[6px] rounded-[50px] CourseUi text-white ${
              activeButton === "Admission"
                ? "bg-[#00A4FF] text-[#010101]"
                : "bg-[#1A1A1A] hover:bg-[#00A4FF] hover:text-[#010101]"
            }`}
          >
            Admission
          </button>
          <button
            onClick={() => setActiveButton("Seminar")}
            className={`px-[16px] py-[10px] rounded-[50px] CourseUi text-white ${
              activeButton === "Seminar"
                ? "bg-[#00A4FF] text-[#010101]"
                : "bg-[#1A1A1A] hover:bg-[#00A4FF] hover:text-[#010101]"
            }`}
          >
            Join free seminar
          </button>
        </div>
      </div>

      {/* picture */}
      <div className="md:h-[496px] h-[168px]   ">
        <img
          className="w-full h-full  rounded-[16px] object-cover"
          // src="https://i.ibb.co.com/Qvbtmw7/image-3-66f065ea8e550.webp"
          src="/enroll.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FoundationCourse;
