import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const UpcominEvents = () => {
  return (
    <div className="text-[#FFFFFF]  sectionGap mt-[50px] md:mt-0">
      <div>
        <h1 className="popularCategoryHead mb-[20px] md:mb-[45px] text-center">
          {" "}
          Upcoming{" "}
          <span className="BorderGlobal  border-[#00A4FF]">Events</span>
        </h1>
        <p
          className="joinClanSubPara  mb-[35px]  2xl:px-[150px] xl:px-[150px] 
      md:px-[10px] px-[10px] text-center"
        >
          Well, because we’re not your grandma’s boring old school! At Eduden,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[40px]">
        <div className="rounded-[20px]  relative w-full h-[515px] overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/Artificial Intelligence Bootcamp.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px]  flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              Artificial Intelligence Bootcamp
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              Join our hands-on offline workshop to master AI concepts and
              applications.
            </p>
            {/* <div className="flex flex-row items-center gap-x-[42px] pb-5">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div> */}
            <h1 className="comingSoon  pb-5">Coming Soon...</h1>
          </div>
        </div>

        <div className="rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/Cybersecurity Mastery Bootcamp.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              Cybersecurity Mastery Bootcamp
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              A workshop to secure your digital future with expert guidance.
            </p>
            {/* <div className="flex flex-row items-center gap-x-[42px] pb-5">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div> */}

            <h1 className="comingSoon  pb-5">Coming Soon...</h1>
          </div>
        </div>

        <div className="rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/Android App Development Bootcamp.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              Android App Development workshop
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              Take part in our offline App Development workshop and build your
              own apps from scratch.
            </p>
            {/* <div className="flex flex-row items-center gap-x-[42px] pb-5">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div> */}

            <h1 className="comingSoon  pb-5">Coming Soon...</h1>
          </div>
        </div>

        <div className="rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/Database Management 2.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              Database Management
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              Gain hands-on experience in organizing and securing data.
            </p>
            {/* <div className="flex flex-row items-center gap-x-[42px] pb-5">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div> */}

            <h1 className="comingSoon  pb-5">Coming Soon...</h1>
          </div>
        </div>

        <div className="rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/Database Management.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              Graphic Design
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              Unleash your creativity and learn to create stunning visual
              content.
            </p>
            {/* <div className="flex flex-row items-center gap-x-[42px] pb-5">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div> */}
            <h1 className="comingSoon pb-5">Coming Soon...</h1>
          </div>
        </div>

        <div className="rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/23411.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              UI/UX Design
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              Enhance your design skills and learn to create user-friendly,
              impactful interfaces.
            </p>
            {/* <div className="flex flex-row items-center gap-x-[42px] pb-5">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div> */}
            <h1 className="comingSoon pb-5">Coming Soon...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcominEvents;
