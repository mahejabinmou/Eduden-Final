import { MdArrowRightAlt } from "react-icons/md";

const AboutHero = () => {
  return (
    <div className=" mt-[50px] ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/sP74kk7/banner-17-66f786e96b74f.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full h-[500px]  flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-[670px]">
            <h1 className="aboutPageHero text-[#FFFFFF] pb-[25px] text-center">
              A Large Range of Course Learning Paths Home
            </h1>
            <p className="text-[#FFFFFF]/[.8] joinClanSubPara pb-[35px]">
              Home > About us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
