// import { useState } from "react";
// import handleMouseEnter from "../../../helpers/handleMouseEnter";
// import UpComingCrsDetails from "../../../components/WhatsNew/UpComingCrsDetails";
// import UpcomingCard from "../../../components/WhatsNew/UpcomingCard";
// import { filterCourse } from "../../../constant/dummyJson";

// const Course = ({ currentCategory }) => {
//   const [isHover, setIsHover] = useState("");

//   const filteredCat = filterCourse.filter((category) => {
//     if (currentCategory === "Show All") {
//       return category;
//     }
//     if (currentCategory === category.category) {
//       return category;
//     }
//   });
//   return (
//     <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-[26px]">
//       {filteredCat.map((courseDetails) => (
//         <div
//           className={`courses min-h-[400px] md:min-h-[0px] lg:min-h-[0px] 2xl:min-h-[0px] rounded-[20px] ${
//             isHover === courseDetails.id && "upCmnhover"
//           } cursor-pointer`}
//           key={courseDetails.id}
//           onMouseEnter={() => handleMouseEnter(courseDetails.id, setIsHover)}
//           onMouseLeave={() => setIsHover("")}
//         >
//           {isHover !== courseDetails.id ? (
//             <UpcomingCard {...courseDetails} />
//           ) : (
//             <UpComingCrsDetails
//               crsDetails={courseDetails.crsDetails}
//               title={courseDetails.title}
//               rating={courseDetails.rating}
//               price={courseDetails.price}
//               category={courseDetails.category}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Course;

/* eslint-disable react/prop-types */
import { useState } from "react";
import handleMouseEnter from "../../../helpers/handleMouseEnter";
import UpComingCrsDetails from "../../../components/WhatsNew/UpComingCrsDetails";
import UpcomingCard from "../../../components/WhatsNew/UpcomingCard";
import { filterCourse } from "../../../constant/dummyJson";

const Course = ({ currentCategory }) => {
  const [isHover, setIsHover] = useState("");

  const filteredCat = filterCourse.filter((category) => {
    if (currentCategory === "Show All") {
      return category;
    }
    if (currentCategory === category.category) {
      return category;
    }
  });
  return (
    <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-[26px] h-full">
      {filteredCat.map((courseDetails) => (
        <div
          className={`courses min-h-[400px] pb-[15px] md:min-h-[0px] lg:min-h-[613px] bg-white 2xl:min-h-[0px] rounded-[20px] ${
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
  );
};

export default Course;
