const NeedHelp = () => {
  return (
    <div>
      <div className="mt-[100px] xs:mt-[130px]  md:mt-[80px]   lg:mt-[80px] xl:mt-[100px] 2xl:mt-[100px]  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/bbJV794/group-1045-66f4e2ba50515.webp"})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[315px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:flex-row md:justify-between  px-[60px] md:px-[32px] lg:px-[60px]  xl:px-[100px]  2xl:px-[150px]    ">
          <div>
            <h1 className="NeedHelpHead mb-[15px] text-center md:text-start text-[#FFFFFF]">
              Need Help?
            </h1>
            <p
              className="needHelpPara text-[#FFFFFF] xl:max-w-[800px]
            lg:max-w-[600px] md:max-w-[500px] mb-[20px] md:text-start text-center"
            >
              Join the Learning Party Now – No Boring Stuff Allowed. Join the
              Learning Party Now – No Boring Stuff Allowed. Join the Learning
              Party Now – No Boring Stuff Allowed.
            </p>
          </div>
          <button className="NeedHelpbuttonPara bg-[#A8FF57] flex items-center justify-center rounded-[50px] py-[8px] px-[18px] gap-x-[10px] text-[#010101]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
