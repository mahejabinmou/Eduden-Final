// import { useState } from "react";

// const CurriculumTest = () => {
//   const courses = [
//     { id: 1, title: "Sketch Principles" },
//     { id: 2, title: "Wireframe" },
//     { id: 3, title: "Information Architecture" },
//     { id: 4, title: "Storyboard Design" },
//     { id: 5, title: "Using AI For UX Audit" },
//     { id: 6, title: "UI Design Project" },
//     { id: 7, title: "Design Heuristics" },
//     { id: 8, title: "AI For UI Design" },
//     { id: 9, title: "AI For Mid-fidelity" },
//     { id: 10, title: "Wireframe" },
//     { id: 11, title: "Information Architecture" },
//     { id: 12, title: "Storyboard Design" },
//     { id: 13, title: "Information Architecture" },
//     { id: 14, title: "Storyboard Design" },
//     { id: 15, title: "Information Architecture" },
//     { id: 16, title: "Storyboard Design" },
//   ];

//   const [showAll, setShowAll] = useState(false);

//   // Determine the courses to display based on `showAll` state
//   const visibleCourses = showAll ? courses : courses.slice(0, 8);

//   return (
//     <div className="bg-black text-white sectionGap">
//       {/* Title Section */}
//       <div className="text-center mb-[76px]">
//         <h2 className="popularCategoryHead text-white font-gucina pb-[10px]">
//           Course curriculum & tools
//         </h2>
//         <p className="text-[#FFFFFF]/[.80] text-[18px] leading-[27px] font-normal pb-[10px]">
//           UI/UX Design
//         </p>
//         <div className="flex justify-center gap-[36px]">
//           <div className="flex items-center gap-[14px]">
//             <img src="/xd.png" alt="" className="h-[30px] w-[30px]" />
//             <p className="text-[#FFFFFF] text-[18px] leading-[27px] font-normal font-lexend">
//               Adobe XD
//             </p>
//           </div>
//           <div className="flex items-center  gap-[14px]">
//             <img src="/figma.png" alt="" className="h-[30px] w-[30px]" />
//             <p className="text-white text-[18px] leading-[27px] font-normal font-lexend">
//               Figma
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
//         {visibleCourses.map((course) => (
//           <div
//             key={course.id}
//             className="flex items-center gap-[24px] rounded-[8px] bg-[#00A4FF] text-white p-[20px]"
//           >
//             <span className="h-[60px] rounded-[8px] w-[60px] text-[#00A4FF] flex justify-center items-center text-[24px] leading-[36px] font-bold font-lexend bg-white">
//               {course.id}
//             </span>
//             <p className="text-[24px] leading-[36px] font-bold font-lexend text-white">
//               {course.title}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="text-center mt-[76px]">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="border border-[#00A4FF] text-[12px] leading-[18px] font-medium font-lexend text-[#00A4FF] hover:bg-[#00A4FF] hover:text-black transition-all duration-300 px-[46px] py-[16px] rounded-[50px]"
//         >
//           {showAll ? "Show Less" : "View All"}
//         </button>
//       </div>
//     </div>
//   );
// };

/* eslint-disable react/prop-types */
import { useState } from "react";

const CurriculumTest = ({ course }) => {
  const [itemsToShow, setItemsToShow] = useState(8);

  // Toggle between "View All" and "View Less"
  const handleToggleView = () => {
    if (itemsToShow === 8) {
      setItemsToShow(course.curriculum.length); // Show all items
    } else {
      setItemsToShow(8); // Show limited items
    }
  };

  return (
    <div className="bg-black text-white sectionGap">
      {/* Title Section */}
      <div className="text-center mb-[76px]">
        <h2 className="popularCategoryHead text-white font-gucina pb-[10px]">
          Course curriculum & tools
        </h2>
        <p className="text-[#FFFFFF]/[.80] text-[18px] leading-[27px] font-normal pb-[10px]">
          {course.title}
        </p>
        <div className="flex justify-center gap-[36px]">
          <div className="flex items-center gap-[14px]">
            <img src="/xd.png" alt="" className="h-[30px] w-[30px]" />
            <p className="text-[#FFFFFF] text-[18px] leading-[27px] font-normal font-lexend">
              Adobe XD
            </p>
          </div>
          <div className="flex items-center gap-[14px]">
            <img src="/figma.png" alt="" className="h-[30px] w-[30px]" />
            <p className="text-white text-[18px] leading-[27px] font-normal font-lexend">
              Figma
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
        {course.curriculum.slice(0, itemsToShow).map((item) => (
          <div
            key={item.cid}
            className="flex items-center gap-[24px] rounded-[8px] bg-[#00A4FF] text-white p-[20px]"
          >
            <span className="h-[60px] rounded-[8px] w-[60px] text-[#00A4FF] flex justify-center items-center text-[24px] leading-[36px] font-bold font-lexend bg-white">
              {item.cid}
            </span>
            <p className="text-[24px] leading-[36px] font-bold font-lexend text-white">
              {item.c}
            </p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-[76px]">
        <button
          onClick={handleToggleView}
          className="border border-[#00A4FF] text-[12px] leading-[18px] font-medium font-lexend text-[#00A4FF] hover:bg-[#00A4FF] hover:text-black transition-all duration-300 px-[46px] py-[16px] rounded-[50px]"
        >
          {itemsToShow === 8 ? "View All" : "View Less"}
        </button>
      </div>
    </div>
  );
};

export default CurriculumTest;
