const AboutHero = () => {
  return (
    <div className=" xl:mt-[25px] lg:mt-[20px] mt-[10px] ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/dM5DM24/About-Us-Edn.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[400px] 2xl:h-[600px]
              h-[300px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto 2xl:max-w-[1000px]  xl:max-w-[700px] lg:max-w-[500px] px-2">
            <h1 className="hidden md:block BannerHead text-[#FFFFFF] pb-[35px] text-center">
              A Large Range of Course{" "}
              <span className="BorderGlobal  border-[#00A4FF]">
                Learning Paths Home
              </span>
            </h1>
            <h1 className="block md:hidden  BannerHead text-[#FFFFFF] pb-[25px] text-center">
              A Large Range of Course{" "}
              <span className="BorderGlobal  border-[#00A4FF]">
                Learning Paths Home
              </span>
            </h1>
            <p className="text-[#FFFFFF]/[.8] joinClanSubPara pb-[35px]">
              Home &gt; About us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
