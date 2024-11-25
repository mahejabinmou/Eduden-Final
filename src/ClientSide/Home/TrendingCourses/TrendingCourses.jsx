const TrendingCourses = () => {
  return (
    <div className="sectionGap">
      <div className="  text-white flex flex-col lg:flex-row md:items-center items-start justify-between  ">
        <h1 className="popularCategoryHead  pb-[20px]">
          Trending <span className="border-b-4 border-[#A8FF57]">Courses</span>
        </h1>
        <p className="joinClanSubPara 2xl:max-w-[800px] xl:max-w-[700px] lg:max-w-[600px] ">
          Well, because we’re not your grandma’s boring old school! At Edu-Den,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee. So, why settle for snooze-worthy lectures when you can join
          the Edu-Den revolution? Let’s make learning epic together!Well,
          because we’re not your grandma’s boring old school! At Edu-Den, we’re
          the rebels of education, the mavericks of learning.
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-end items-center gap-[20px] mt-[80px]">
        <div className="relative group  overflow-hidden">
          {/* Image Section */}
          <div className="h-full w-full">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://i.ibb.co.com/VpXpTwd/rectangle-108-66f3daaa27fd4.webp"
              alt="Cyber Security"
            />
          </div>

          {/* Text Section */}
          <div className="absolute inset-0  flex flex-col justify-end p-[25px] pb-[20px]  bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex justify-between items-center">
              <h1 className="text-white aboutPageHero">Cyber Security</h1>
              {/* <HiArrowLongRight size={60} className="text-white " /> */}

              {/* <HiArrowLongRight size={60} className="text-white " /> */}
              <div className="w-14 h-12 2xl:w-20 xl:w-20 lg:w-20 md:w-14 flex justify-center items-center">
                <img src="/arrow-white.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2  grid-cols-1 items-center gap-[20px]">
          <div className="relative group  overflow-hidden">
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://i.ibb.co.com/1bgG01s/rectangle-120-66f3db2b9e8b1.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0  flex flex-col justify-end p-[25px] pb-[15px]  bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex justify-between items-center">
                <h1 className="text-white aboutPageHero">Graphic Design</h1>
                {/* <HiArrowLongRight size={60} className="text-white " /> */}

                {/* <HiArrowLongRight size={60} className="text-white " /> */}
                <div className="w-14 h-12 2xl:w-20 xl:w-20 lg:w-20 md:w-14 flex justify-center items-center">
                  <img src="/arrow-white.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group  overflow-hidden">
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://i.ibb.co.com/p1HQB7F/group-30-66f3db519e317.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0  flex flex-col justify-end p-[25px] pb-[15px]  bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex justify-between items-center">
                <h1 className="text-white aboutPageHero">UI/UX Design</h1>
                {/* <HiArrowLongRight size={60} className="text-white " /> */}
                <div className="w-14 h-12 2xl:w-20 xl:w-20 lg:w-20 md:w-14 flex justify-center items-center">
                  <img src="/arrow-white.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group  overflow-hidden">
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://i.ibb.co.com/P1BNGfB/group-1086-66f3db5f4b7d6.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0  flex flex-col justify-end p-[25px] pb-[15px]  bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex justify-between items-center">
                <h1 className="text-white aboutPageHero">Web Development</h1>
                {/* <HiArrowLongRight size={60} className="text-white " /> */}
                <div className="w-14 h-12 2xl:w-20 xl:w-20 lg:w-20 md:w-14 flex justify-center items-center">
                  <img src="/arrow-white.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group  overflow-hidden">
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://i.ibb.co.com/nggGJLH/rectangle-123-1-66f3dc2d8c7c7.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0  flex flex-col justify-end p-[25px] pb-[15px]  bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex justify-between items-center">
                <h1 className="text-white aboutPageHero">
                  Mobile App Development
                </h1>
                {/* <HiArrowLongRight size={60} className="text-white " /> */}
                <div className="w-14 h-12 2xl:w-20 xl:w-20 lg:w-20 md:w-14 flex justify-center items-center">
                  <img src="/arrow-white.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
