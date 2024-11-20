import { MdArrowRightAlt } from "react-icons/md";

const JoinOurClan = () => {
  return (
    <div className=" section ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/yhFHHCt/rectangle-139-66f4ca32c7136.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[684px] h-[256px] flex justify-center items-center"
          ></div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center mx-auto 
          md:max-w-[675px]  max-w-[500px]"
          >
            <p className="text-[#A8FF57] joinClanPara md:pb-[25px] pb-[12px]">
              Join Our Clan
            </p>
            <h1 className="joinClanHead text-[#FFFFFF] md:pb-[25px] pb-[5px] text-center">
              Unlock Your Inner Genius at Edu-Den!
            </h1>
            <p className="text-[#FFFFFF] joinClanSubPara md:pb-[35px] mb-[10px]">
              Join the Learning Party Now – No Boring Stuff Allowed.
            </p>
            <button className="homeLargeAppoinMent mt-[35px] flex items-center justify-between text-[#010101] bg-[#A8FF57] font-bold">
              Enroll Now <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurClan;
