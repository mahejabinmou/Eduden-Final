// import { MdArrowRightAlt } from "react-icons/md";
// import { Link } from "react-router-dom";

// const JoinOurClan = () => {
//   return (
//     <div className=" section ">
//       <div className="  ">
//         <div className="relative">
//           <div
//             style={{
//               backgroundImage: `url("https://i.ibb.co.com/yhFHHCt/rectangle-139-66f4ca32c7136.webp")`,

//               // backgroundImage: `url("assets/images/new-changes/join-clan-img.png")`,
//             }}
//             className="bg-no-repeat bg-center bg-cover w-full md:h-[684px] h-[270px] flex justify-center items-center  brightness-105"
//           ></div>

//           <div
//             className="absolute inset-0 flex flex-col items-center justify-center mx-auto
//           md:max-w-[675px]  max-w-[500px]"
//           >
//             <p className="text-[#00A4FF] testimonialSub md:pb-[25px] pb-[12px]">
//               Join Our Clan
//             </p>
//             <h1 className="popularCategoryHead px-[30px] md:px-[0px] text-[#FFFFFF] pb-[10px] text-center">
//               Unlock Your Inner Genius at Eduden!
//             </h1>
//             <p className="text-[#FFFFFF] joinClanSubPara px-[30px] md:px-[0px] md:pb-[35px] mb-[10px] pb-[12px] text-center">
//               Join the Learning Party Now - No Boring Stuff Allowed.
//             </p>
//             <Link to="/courseDetails">
//               <button className="homeLargeAppoinMent bg-[#00A4FF] flex items-center justify-center rounded-[50px]  gap-x-[5px] text-[#010101]">
//                 Enroll Now <MdArrowRightAlt />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinOurClan;

import { BsRecordBtn } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

import { MdLiveTv, MdOutlineAssignment, MdOutlineQuiz } from "react-icons/md";
/* eslint-disable react/prop-types */
const FeaturesSection = ({ course }) => {
  const features = [
    // {
    //   icon: <FaVideo className="text-white w-[30px] h-[20px] mx-auto" />, // Replace with an actual icon or image
    //   title: "225+ Videos in 15 Modules",
    //   overView:
    //     "Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!",
    //   description:
    //     "The course comprises 15 modules and more than 225 videos for gradual learning and is presented through documentation.",
    // },
    // {
    //   icon: <BsRecordBtn className="text-white w-[30px] h-[20px] mx-auto" />,
    //   title: "150+ hours recorded content",
    //   overView:
    //     "Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!",
    //   description:
    //     "Video duration and size have been optimized taking into account bandwidth and time consumption.",
    // },
    {
      icon: (
        <MdOutlineAssignment className="text-white w-[30px] h-[20px] mx-auto" />
      ),
      title: "12 Assignments",
      overView:
        "Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!",
      description:
        "Assignment solutions will be posted on GitHub or Slack after the course for self-practice.",
    },
    {
      icon: <MdOutlineQuiz className="text-white w-[30px] h-[20px] mx-auto" />,
      title: "30+ Quizzes",
      overView:
        "Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!",
      description:
        "At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.",
    },
    {
      icon: <MdLiveTv className="text-white w-[30px] h-[20px] mx-auto" />,
      title: "Live sessions",
      overView:
        "Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!",
      description:
        "Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.",
    },
    {
      icon: (
        <svg
          width="30"
          height="20"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white mx-auto"
        >
          <path
            d="M20.0002 11.6663C20.9206 11.6663 21.6668 10.9201 21.6668 9.99967C21.6668 9.0792 20.9206 8.33301 20.0002 8.33301C19.0797 8.33301 18.3335 9.0792 18.3335 9.99967C18.3335 10.9201 19.0797 11.6663 20.0002 11.6663Z"
            fill="currentColor"
          />
          <path
            d="M10 28.333H30V31.6663H10V28.333ZM16.6667 19.7163L21.32 24.373L27.8733 17.8147L30 19.9997V13.333H23.3333L25.5167 15.458L21.3183 19.6563L16.6667 14.9997L10 21.6663L12.3567 24.023L16.6667 19.7163Z"
            fill="currentColor"
          />
          <path
            d="M31.6668 5.00044H26.1702C26.0051 4.75503 25.8271 4.51859 25.6368 4.29211L25.6202 4.27211C24.3952 2.84639 22.6726 1.94157 20.8035 1.74211C20.2726 1.64195 19.7277 1.64195 19.1968 1.74211C17.3278 1.94157 15.6051 2.84639 14.3802 4.27211L14.3635 4.29211C14.1733 4.51804 13.9953 4.75393 13.8302 4.99877V5.00044H8.3335C7.00782 5.00176 5.73682 5.52897 4.79942 6.46637C3.86203 7.40376 3.33482 8.67476 3.3335 10.0004V33.3338C3.33482 34.6594 3.86203 35.9304 4.79942 36.8678C5.73682 37.8052 7.00782 38.3324 8.3335 38.3338H31.6668C32.9925 38.3324 34.2635 37.8052 35.2009 36.8678C36.1383 35.9304 36.6655 34.6594 36.6668 33.3338V10.0004C36.6655 8.67476 36.1383 7.40376 35.2009 6.46637C34.2635 5.52897 32.9925 5.00176 31.6668 5.00044ZM33.3335 33.3338C33.3335 33.7758 33.1579 34.1997 32.8453 34.5123C32.5328 34.8248 32.1089 35.0004 31.6668 35.0004H8.3335C7.89147 35.0004 7.46755 34.8248 7.15498 34.5123C6.84242 34.1997 6.66683 33.7758 6.66683 33.3338V10.0004C6.66683 9.55841 6.84242 9.13449 7.15498 8.82193C7.46755 8.50937 7.89147 8.33377 8.3335 8.33377H15.9168C16.1081 7.39186 16.6191 6.54504 17.3633 5.93679C18.1075 5.32854 19.039 4.99626 20.0002 4.99626C20.9613 4.99626 21.8929 5.32854 22.637 5.93679C23.3812 6.54504 23.8922 7.39186 24.0835 8.33377H31.6668C32.1089 8.33377 32.5328 8.50937 32.8453 8.82193C33.1579 9.13449 33.3335 9.55841 33.3335 10.0004V33.3338Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "9 Projects",
      overView:
        "Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!",
      description:
        "We embraced a project-centric learning methodology for the duration of the course. There are 9 projects planned for completion in the course.",
    },
  ];

  return (
    <div className="sectionGap">
      <div className="mb-[75px] text-center xl:max-w-[1140px] mx-auto">
        <h1 className="popularCategoryHead  text-white pb-[16px]">
          Course Overview
        </h1>
        <p className="joinClanSubPara text-white/[.8]">{course.overView}</p>
      </div>
      <div className="bg-[#181717] px-[50px] py-[50px]  2xl:px-[80px] 2xl:py-[100px] xl:px-[50px] xl:py-[50px] rounded-[14px] text-white ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[30px] xl:gap-[80px] 2xl:gap-[100px]">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex flex-row gap-[30px] justify-center items-center">
                <div>
                  <div className=" mb-[20px]">{feature.icon}</div>
                  <h3 className="menuHead mb-[8px]">{feature.title}</h3>
                  <p className="menuPara">{feature.description}</p>
                </div>
                {/* Dotted divider */}
                {(index + 1) % 2 !== 0 && index !== features.length - 1 && (
                  <div className="border-r-2  border-dotted border-gray-500 h-[100px] mx-auto hidden lg:block"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
