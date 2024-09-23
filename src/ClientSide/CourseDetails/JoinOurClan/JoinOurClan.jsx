import { MdArrowRightAlt } from "react-icons/md";

const JoinOurClan = () => {
  return (
    <div className="  ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/n0TJfNH/coursedeatails-66f1189b9fd55.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full h-[684px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-[675px]">
            <p className="text-[#A8FF57] joinClanPara pb-[25px]">
              Join Our Clan
            </p>
            <h1 className="joinClanHead text-[#FFFFFF] pb-[25px]">
              Unlock Your Inner Genius at Edu-Den!
            </h1>
            <p className="text-[#FFFFFF] joinClanSubPara pb-[35px]">
              Join the Learning Party Now – No Boring Stuff Allowed.
            </p>
            <button className="buttonPara bg-[#A8FF57] flex items-center justify-between rounded-[50px] py-[8px] px-[18px] gap-x-[10px] text-[#010101]">
              Enroll Now <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurClan;
