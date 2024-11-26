import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const UpcominEvents = () => {
  return (
    <div className="text-[#FFFFFF]  sectionGap">
      <div>
        <h1 className="popularCategoryHead mb-[20px] md:mb-[45px] text-center">
          {" "}
          Upcoming <span className="BorderGlobal border-[#A8FF57]">Events</span>
        </h1>
        <p
          className="joinClanSubPara  mb-[50px]  2xl:px-[150px] xl:px-[150px] 
      md:px-[10px] px-[10px] text-center"
        >
          Well, because we’re not your grandma’s boring old school! At Edu-Den,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[40px]">
        {/* <div className="rounded-[20px]  relative w-full h-[513px]  overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://i.ibb.co.com/mFRHnyq/group-1090-66f4d156025ce.webp"
            alt=""
          />
          <div className="absolute  inset-0 top-[277px] flex flex-col justify-center items-center text-center ">
            <h1 className="upcomingHead  mb-[15px]  lg:px-[50px] px-[20px]">
              Artificial Intelligence Bootcamp
            </h1>
            <p className="upcomingPara  mb-[40px]  lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px]">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-[20px]  relative w-full h-[513px] overflow-hidden shadow-lg group">
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
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px] pb-4">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rounded-[20px] relative w-full h-[513px]  overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://i.ibb.co.com/LkMLg9K/group-1076-66f4dbcb585e8.webp"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center ">
            <h1 className="upcomingHead  mb-[15px]  lg:px-[50px] px-[20px] ">
              Cybersecurity Mastery Bootcamp
            </h1>
            <p className="upcomingPara  mb-[40px] lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px]">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-[20px] relative w-full h-[513px] overflow-hidden shadow-lg group">
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
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px] pb-4">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rounded-[20px] relative w-full h-[513px]  overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://i.ibb.co.com/B4yPcfy/group-1022-66f4dc175bd81.webp"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center ">
            <h1 className="upcomingHead  mb-[15px]  lg:px-[50px] px-[20px] ">
              Android App Development Bootcamp
            </h1>
            <p className="upcomingPara  mb-[40px]  lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px]">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-[20px] relative w-full h-[513px] overflow-hidden shadow-lg group">
          <img
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-15"
            src="/assets/images/UpcomingEvents/Android App Development Bootcamp.jpg"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="upcomingHead mb-[15px] lg:px-[50px] px-[20px]">
              Android App Development Bootcamp
            </h1>
            <p className="upcomingPara mb-[20px] lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px] pb-4">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rounded-[20px] relative w-full h-[513px]  overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://i.ibb.co.com/9yFZVD7/group-1080-66f4dcb0195fe.webp"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center ">
            <h1 className="upcomingHead  mb-[15px]  lg:px-[50px] px-[20px] ">
              Database Management
            </h1>
            <p className="upcomingPara  mb-[40px]  lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px]">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-[20px] relative w-full h-[513px] overflow-hidden shadow-lg group">
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
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px] pb-4">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rounded-[20px] relative w-full h-[513px]  overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://i.ibb.co.com/h91cb8f/group-1024-66f4dd09bcd8c.webp"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center ">
            <h1 className="upcomingHead  mb-[15px]  lg:px-[50px] px-[20px] ">
              Database Management
            </h1>
            <p className="upcomingPara  mb-[40px]  lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px]">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-[20px] relative w-full h-[513px] overflow-hidden shadow-lg group">
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
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px] pb-4">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rounded-[20px] relative w-full h-[513px]  overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://i.ibb.co.com/X5w4s1R/group-1078-66f4dd5a506eb.webp"
            alt=""
          />
          <div className="absolute inset-0 top-[277px] flex flex-col justify-center items-center text-center ">
            <h1 className="upcomingHead  mb-[15px]  lg:px-[50px] px-[20px] ">
              Database Management
            </h1>
            <p className="upcomingPara  mb-[40px]  lg:px-[50px] px-[20px]">
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px]">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="rounded-[20px] relative w-full h-[513px] overflow-hidden shadow-lg group">
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
              Fermentum fusce himenaeos neque condimentum maecenas vitae congue
              iaculis inceptos ullamcorper habitasse
            </p>
            <div className="flex flex-row items-center gap-x-[42px] pb-4">
              <div className="flex flex-row items-center gap-x-[5px]">
                <FaRegClock size={14} />{" "}
                <span className="upcomingEvent">1hr, 24m</span>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <SlCalender size={14} />{" "}
                <span className="upcomingEvent">jun 12, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcominEvents;
