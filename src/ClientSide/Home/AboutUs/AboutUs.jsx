import { MdArrowRightAlt } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="text-[#FFFFFF] sectionGap">
      <div className="flex lg:flex-row  flex-col justify-between items-center ">
        <h1 className="AboutUsHead mb-[30px]">
          {" "}
          <span className="border-b-4 border-[#A8FF57]">
            About {""} {""}
          </span>
          {""} {""}Us
        </h1>
        <p
          className="joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px]
          
        "
        >
          Well, because we’re not your grandma’s boring old school! At Edu-Den,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee. So, why settle for snooze-worthy lectures when you can join
          the Edu-Den revolution? Let’s make learning epic together! Well,
          because we’re not your grandma’s boring old school! At Edu-Den, we’re
          the rebels of education, the mavericks of learning, and the champions
          of fun-filled knowledge. We’ll teach you how to slay dragons and code
          websites, all while cracking jokes and sipping on virtual coffee.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center mt-[50px]">
        <button
          className="flex items-center justify-between gap-x-[10px] mb-[30px] homeLargeAppoinMent
        
        border border-[#A8FF57]"
        >
          Read More <MdArrowRightAlt />
        </button>

        <p className="joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px]">
          Well, because we’re not your grandma’s boring old school! At Edu-Den,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
