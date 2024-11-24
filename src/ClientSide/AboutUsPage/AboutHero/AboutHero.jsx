const AboutHero = () => {
  return (
    <div className=" xl:mt-[50px] lg:mt-[40px] mt-[10px] ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/dM5DM24/About-Us-Edn.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[400px] 2xl:h-[600px]
              h-[300px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-[670px]">
            <h1 className="hidden md-block aboutPageHero text-[#FFFFFF] pb-[25px] text-center">
              A Large Range of Course{" "}
              <span className="border-b-4 border-[#A8FF57]">
                Learning Paths Home
              </span>
            </h1>
            <h1 className="md-hidden block max-w-[250px] aboutPageHero text-[#FFFFFF] pb-[25px] text-center">
              A Large Range of Course{" "}
              <span className="border-b-4 border-[#A8FF57]">
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
