import { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row sectionGap md:gap-x-0 md:gap-y-[80px] text-[#FFFFFF] lg:gap-x-[80px] pb-[50px]">
      {/* FAQ Section */}
      <div className="max-w-[964px]">
        <h2 className=" FaqFreHead mb-[80px] text-[#FFFFFF]">
          <span className="border-b border-[#A8FF57] ">Frequently</span> Asked
          Question
        </h2>

        <div className="mt-8 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] rounded-lg overflow-hidden ${
                activeIndex === index ? "bg-[#1A1A1A]" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
              >
                <span className="joinClanPara text-white">{faq.question}</span>
                <span className="text-white">
                  {activeIndex === index ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 text-white">
                  <p className="faqPara">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className=" bg-gray-900 rounded-lg py-[100px] md:mt-[0px] mt-[50px] flex flex-col justify-center items-center">
        <div className="mb-[35px]">
          <BiMessageDetail size={121} />
        </div>
        <div className=" text-center  mb-[25px]">
          <h3 className="faqActionHead text-[#FFFFFF] max-w-[393px] xl:0 lg:px-[50px]">
            Do you have more questions?
          </h3>
        </div>
        <p className="joinClanSubPara text-center text-[#FFFFFF]  px-[30px]  mb-[35px]">
          Learn more about our services, course offerings, or support. We're
          here to help.
        </p>
        <button className=" px-[20px] py-[8px] bg-[#A8FF57] text-[#010101] rounded-full">
          Contact us
        </button>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is ByteSkill?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "How do I register on ByteSkill?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Do ByteSkill courses come with certificates?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Is there tutor support available on ByteSkill?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "How do I make payments for ByteSkill courses?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Are ByteSkill courses suitable for beginners?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
];

export default Faq;
