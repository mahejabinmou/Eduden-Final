import { MdArrowRightAlt } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="text-[#FFFFFF] sectionGap">
      <div className="md:hidden block">
        <div className="flex  flex-col justify-between  ">
          <h1
            className="popularCategoryHead 
joinClanSubPara(para) mb-[30px]"
          >
            {" "}
            <span className="lg:border-b-4 border-b-2 border-[#A8FF57]">
              About {""} {""}
            </span>
            {""} {""}Us
          </h1>
          <p className="joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px] ">
            Well, because we’re not your grandma’s boring old school! At
            Edu-Den, we’re the rebels of education, the mavericks of learning,
            and the champions of fun-filled knowledge. We’ll teach you how to
            slay dragons and code websites, all while cracking jokes and sipping
            on virtual coffee. So, why settle for snooze-worthy lectures when
            you can join the Edu-Den revolution? Let’s make learning epic
            together! Well, because we’re not your grandma’s boring old school!
            At Edu-Den, we’re the rebels of education, the mavericks of
            learning, and the champions of fun-filled knowledge. We’ll teach you
            how to slay dragons and code websites, all while cracking jokes and
            sipping on virtual coffee.
          </p>
        </div>

        <button
          className="mt-[30px] flex items-center justify-between gap-x-[5px] mb-[30px] AboutHome
        
        border border-[#A8FF57]  "
        >
          Read More <MdArrowRightAlt />
        </button>
      </div>

      <div className="hidden lg:block">
        <div className="flex lg:flex-row  flex-col justify-between items-start ">
          <h1
            className="popularCategoryHead 
 mb-[30px]"
          >
            {" "}
            <span className="border-b-4 border-[#A8FF57]">
              About {""} {""}
            </span>
            {""} {""}Us
          </h1>
          <p className="joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px] ">
            Well, because we’re not your grandma’s boring old school! At
            Edu-Den, we’re the rebels of education, the mavericks of learning,
            and the champions of fun-filled knowledge. We’ll teach you how to
            slay dragons and code websites, all while cracking jokes and sipping
            on virtual coffee. So, why settle for snooze-worthy lectures when
            you can join the Edu-Den revolution? Let’s make learning epic
            together! Well, because we’re not your grandma’s boring old school!
            At Edu-Den, we’re the rebels of education, the mavericks of
            learning, and the champions of fun-filled knowledge. We’ll teach you
            how to slay dragons and code websites, all while cracking jokes and
            sipping on virtual coffee.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-start  mt-[30px] mb-[30px] ">
          <p className=" joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px]">
            Well, because we’re not your grandma’s boring old school! At
            Edu-Den, we’re the rebels of education, the mavericks of learning,
            and the champions of fun-filled knowledge. We’ll teach you how to
            slay dragons and code websites, all while cracking jokes and sipping
            on virtual coffee.
          </p>
          <button
            className="flex items-center lg:hidden block hover:bg-[#A8FF57] hover:text-black justify-between gap-x-[10px] homeLargeAppoinMent
        
        border border-[#A8FF57]"
          >
            Read More <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
