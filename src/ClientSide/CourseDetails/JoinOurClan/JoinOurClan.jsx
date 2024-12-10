import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const JoinOurClan = () => {
  return (
    <div className=" section ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/yhFHHCt/rectangle-139-66f4ca32c7136.webp")`,

              // backgroundImage: `url("assets/images/new-changes/join-clan-img.png")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[684px] h-[270px] flex justify-center items-center  brightness-105"
          ></div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center mx-auto 
          md:max-w-[675px]  max-w-[500px]"
          >
            <p className="text-[#00A4FF] testimonialSub md:pb-[25px] pb-[12px]">
              Join Our Clan
            </p>
            <h1 className="popularCategoryHead px-[30px] md:px-[0px] text-[#FFFFFF] pb-[10px] text-center">
              Unlock Your Inner Genius at Eduden!
            </h1>
            <p className="text-[#FFFFFF] joinClanSubPara px-[30px] md:px-[0px] md:pb-[35px] mb-[10px] pb-[12px] text-center">
              Join the Learning Party Now - No Boring Stuff Allowed.
            </p>
            <Link to="/courseDetails">
              <button className="homeLargeAppoinMent bg-[#00A4FF] flex items-center justify-center rounded-[50px]  gap-x-[5px] text-[#010101]">
                Enroll Now <MdArrowRightAlt />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurClan;
