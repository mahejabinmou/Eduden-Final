const TrendingCourses = () => {
  return (
    <div className="sectionGap">
      <div className="  text-white flex flex-col lg:flex-row md:items-center items-start justify-between  ">
        <h1 className="AboutUsHead  pb-[20px]">
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

      <div className="flex md:flex-row flex-col items-center gap-[20px] mt-[80px]">
        <div>
          <img
            src="https://i.ibb.co.com/VpXpTwd/rectangle-108-66f3daaa27fd4.webp"
            alt=""
          />
        </div>

        <div className="grid md:grid-cols-2  grid-cols-1 items-center gap-[20px]">
          <div>
            <img
              src="https://i.ibb.co.com/1bgG01s/rectangle-120-66f3db2b9e8b1.webp"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://i.ibb.co.com/p1HQB7F/group-30-66f3db519e317.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/P1BNGfB/group-1086-66f3db5f4b7d6.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/nggGJLH/rectangle-123-1-66f3dc2d8c7c7.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
