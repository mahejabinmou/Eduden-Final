import { HiOutlineMinusSmall } from "react-icons/hi2";
import Course from "./Course";
import useFilterCategory from "../../../hooks/useFilterCategory";
import { useState } from "react";
import categories from "../../../constant/stateDummyData";

const AllCourses = () => {
  const [categoriesList, setCategoriesList] = useState({ ...categories });

  const { category: currentCategory } = useFilterCategory(categoriesList);
  const handleCategories = (category) => {
    if (category === currentCategory) {
      setCategoriesList({ ...categories });
      return;
    }
    const updateCategory = { ...categoriesList };

    for (let cat in updateCategory) {
      if (cat === category) {
        updateCategory[cat] = true;
      } else {
        updateCategory[cat] = false;
      }
    }
    setCategoriesList(updateCategory);
  };
  return (
    <div className="sectionGap text-[#FFFFFF]">
      <div>
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
      </div>

      <div className="hidden md:block flex flex-row lg:gap-x-[20px] gap-x-[5px] text-white group">
        <button
          onClick={() => handleCategories("Show All")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]"
        >
          Show All
        </button>
        <button
          onClick={() => handleCategories("Graphicis Design")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]"
        >
          Graphicis Design
        </button>
        <button
          onClick={() => handleCategories("Ux/Ui Design")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]"
        >
          Ux/Ui Design
        </button>
        <button
          onClick={() => handleCategories("Web Development")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]"
        >
          Web Development
        </button>
        <button
          onClick={() => handleCategories("Mobile App Development")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#553030]"
        >
          Mobile App Development
        </button>
        <button
          onClick={() => handleCategories("Programming")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]"
        >
          Programming
        </button>
        <button
          onClick={() => handleCategories("Ethical Hacking")}
          className="allCoursesBtn rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]"
        >
          Ethical Hacking
        </button>
      </div>
      <Course currentCategory={currentCategory} />
    </div>
  );
};

export default AllCourses;
