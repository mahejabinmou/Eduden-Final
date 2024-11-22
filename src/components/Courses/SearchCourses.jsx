// /* eslint-disable no-irregular-whitespace */
// const SearchCourses = () => {
//     return (
//         <div className=" flex justify-between items-center mt-[50px]">
//             <div>
//                 <p className="text-white ">Showing 1-9 Of 62 Results</p>
//             </div>
//             <div className="max-w-[380px] coursesSrchBtn">
//                 <input
//                     type="Search courses"
//                     required
//                     className="w-full placeholder:text-[#FFFFFFCC] text-[#FFFFFFCC] px-4 py-[10px]"
//                     placeholder="Search courses "
//                 />
//                 <button>Search</button>
//             </div>
//         </div>
//     )
// }

// export default SearchCourses

/* eslint-disable no-irregular-whitespace */
const SearchCourses = () => {
  return (
    <div className=" flex justify-between items-center mt-[50px]">
      <div>
        <p className="text-white ">Showing 1-9 Of 62 Results</p>
      </div>
      <div className="max-w-[380px] coursesSrchBtn">
        <input
          type="Search courses"
          required
          className="w-full placeholder:text-[#FFFFFFCC] text-[#FFFFFFCC] px-4 py-[10px]"
          placeholder="Search courses "
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchCourses;
