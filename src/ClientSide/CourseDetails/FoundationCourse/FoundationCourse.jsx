import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { TiTick } from "react-icons/ti";

const FoundationCourse = () => {
  // Course data array
  const courseDetails = [
    { label: "Price:", value: "$30" },
    { label: "Instructor:", value: "John Doe" },
    { label: "Certification:", value: "Yes" },
    { label: "Lessons:", value: "17" },
    { label: "Duration:", value: "3 months" },
    { label: "Lecture:", value: "30" },
    { label: "Enrolled:", value: "105" },
    { label: "Skill level:", value: "Basic" },
    { label: "Quiz:", value: "Yes" },
  ];
  return (
    <div className="sectionGap bg-[#010101]  flex flex-col lg:flex-row gap-x-[80px] justify-center">
      <div>
        <div className="md:h-[510px] h-[168px] max-w-[1017px]   ">
          <img
            className="w-full h-full  rounded-[16px]"
            src="https://i.ibb.co.com/Qvbtmw7/image-3-66f065ea8e550.webp"
            alt=""
          />
        </div>

        <div className="flex flex-row  gap-x-[16px] mt-[50px] group mb-[30px]">
          <button
            className=" hoverbuttonPara rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]
          bg-[#010101] text-[#FFFFFF]"
          >
            Featured
          </button>
          <button
            className="hoverbuttonPara rounded-[50px] hover:bg-[#A8FF57] hover:text-[#010101]
          bg-[#010101] text-[#FFFFFF]"
          >
            Cyber Security
          </button>
        </div>

        <div>
          <h1 className="max-w-[872px] text-[#FFFFFF] title pb-[16px]">
            Foundation Course To Understand About Software
          </h1>
          <div className="max-w-[895px]">
            <p className="para text-[#FFFFFFCC]/[.8]">
              Embark on a comprehensive React journey with our React Front To
              Back course. Designed for beginners and seasoned developers alike,
              this course covers the fundamentals and dives deep into advanced
              topics. From building interactive user interfaces to managing
              state and integrating with APIs, you’ll gain hands-on experience.
              Elevate your React skills and stay at the forefront of web
              development trends with this immersive and practical learning
              experience.
            </p>

            <div className="">
              <ul className="para text-[#FFFFFFCC]/[.8] pt-[15px] list-disc ml-[30px]">
                <li className="pb-[15px] ">
                  Develop a strong understanding of JavaScript basics, including
                  variables, data types, and control flow, building a solid
                  foundation for advanced concepts.
                </li>
                <li className="pb-[15px]">
                  Develop a strong understanding of JavaScript basics, including
                  variables, data types, and control flow, building a solid
                  foundation for advanced concepts.
                </li>
                <li className="pb-[15px]">
                  Develop a strong understanding of JavaScript basics, including
                  variables, data types, and control flow, building a solid
                  foundation for advanced concepts.
                </li>
                <li className="pb-[15px]">
                  Develop a strong understanding of JavaScript basics, including
                  variables, data types, and control flow, building a solid
                  foundation for advanced concepts.
                </li>
              </ul>
            </div>

            <div>
              <h1 className="subTitle text-[#FFFFFF]">What You Learn</h1>
              <div className="">
                <ul className="para text-[#FFFFFFCC]/[.8] pt-[15px]  ">
                  <li className="pb-[15px] flex gap-x-[20px]">
                    <span>
                      <TiTick size={24} className="text-[#A8FF57]" />
                    </span>
                    Develop a strong understanding of JavaScript basics,
                    including variables, data types, and control flow, building
                    a solid foundation for advanced concepts.
                  </li>
                  <li className="pb-[15px] flex gap-x-[20px]">
                    <span>
                      <TiTick size={24} className="text-[#A8FF57]" />
                    </span>
                    Develop a strong understanding of JavaScript basics,
                    including variables, data types, and control flow, building
                    a solid foundation for advanced concepts.
                  </li>
                  <li className="pb-[15px] flex gap-x-[20px]">
                    <span>
                      <TiTick size={24} className="text-[#A8FF57]" />
                    </span>
                    Develop a strong understanding of JavaScript basics,
                    including variables, data types, and control flow, building
                    a solid foundation for advanced concepts.
                  </li>
                  <li className="pb-[15px]  flex gap-x-[20px]">
                    <span>
                      <TiTick size={24} className="text-[#A8FF57]" />
                    </span>
                    Develop a strong understanding of JavaScript basics,
                    including variables, data types, and control flow, building
                    a solid foundation for advanced concepts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:h-[510px] h-[168px] max-w-[1017px] md:pt-[50px] pt-[30px]">
          <img
            className="w-full h-full  rounded-[16px]"
            src="https://i.ibb.co.com/s3tpzCZ/image-8-66f110de9f7e0.webp"
            alt=""
          />
        </div>

        <div className="pt-[50px]">
          <h1 className="subTitle text-[#FFFFFF]">
            Why choose you this course
          </h1>
          <div className="">
            <ul className="para text-[#FFFFFFCC]/[.8] pt-[15px]  max-w-[895px]">
              <li className="pb-[15px] flex gap-x-[20px]">
                <span>
                  <TiTick size={24} className="text-[#A8FF57]" />
                </span>
                Develop a strong understanding of JavaScript basics, including
                variables, data types, and control flow, building a solid
                foundation for advanced concepts.
              </li>
              <li className="pb-[15px] flex gap-x-[20px]">
                <span>
                  <TiTick size={24} className="text-[#A8FF57]" />
                </span>
                Develop a strong understanding of JavaScript basics, including
                variables, data types, and control flow, building a solid
                foundation for advanced concepts.
              </li>
              <li className="pb-[15px] flex gap-x-[20px]">
                <span>
                  <TiTick size={24} className="text-[#A8FF57]" />
                </span>
                Develop a strong understanding of JavaScript basics, including
                variables, data types, and control flow, building a solid
                foundation for advanced concepts.
              </li>
              <li className="pb-[15px]  flex gap-x-[20px]">
                <span>
                  <TiTick size={24} className="text-[#A8FF57]" />
                </span>
                Develop a strong understanding of JavaScript basics, including
                variables, data types, and control flow, building a solid
                foundation for advanced concepts.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* flex item */}
      <div>
        <div className="bg-[#1A1A1A] text-white p-[50px] rounded-[10px] max-w-[523px] mb-[50px]">
          {/* Title */}
          <h2 className="subTitle font-bold mb-4">Course Information</h2>

          {/* Map over course details array */}
          <ul>
            {courseDetails.map((detail, index) => (
              <li key={index} className="flex justify-between py-1">
                <span className="para">{detail.label}</span>
                <span className="para">{detail.value}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-6">
            <button
              className="w-full buttonPara bg-[#A8FF57]
text-black py-[11.5px] rounded-full"
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="bg-[#1A1A1A] text-white p-[50px]  rounded-[10px] max-w-[523px] mb-[50px]">
          {/* Title */}
          <h2 className="subTitle mb-[50px]">Contact Us</h2>

          <div className="flex  gap-x-[30px] mb-[50px]">
            <div className="h-[60px] w-[60px]  bg-[#8EFA6D] rounded-full flex items-center justify-center">
              <FaPhoneAlt size={27} className="text-black" />
            </div>

            <div>
              <h1 className="subTitle pb-[12px]">Phone Number</h1>
              <p className="para pb-[8px]">+919547578920</p>
              <p className="para">+919547578920</p>
            </div>
          </div>

          <div className="flex  gap-x-[30px] mb-[50px]">
            <div className="h-[60px] w-[60px]   bg-[#8EFA6D] rounded-full flex items-center justify-center">
              <MdEmail size={27} className="text-black" />
            </div>

            <div>
              <h1 className="subTitle pb-[12px]">Email Address</h1>
              <p className="para 2xl:pb-[8px]">example@gmail.com</p>
              <p className="para">example@gmail.com</p>
            </div>
          </div>

          <div className="flex  gap-x-[30px] md:hidden block ">
            <div
              className="h-[60px] w-[60px]
            bg-[#8EFA6D] rounded-full flex items-center justify-center"
            >
              <FaLocationDot size={27} className="text-black" />
            </div>

            <div>
              <h1 className="subTitle pb-[12px]">Location</h1>
              <p className="para md:pb-[8px] pb-[4px]">
                5678 Bangla Main Road, cities 580
              </p>
              <p className="para">GBnagla, example 54786</p>
            </div>
          </div>
          {/* large */}
          <div className="flex  gap-x-[30px] md:block hidden">
            <div
              className="h-[60px] w-[60px]
            bg-[#8EFA6D] rounded-full flex items-center justify-center"
            >
              <FaLocationDot size={27} className="text-black" />
            </div>

            <div>
              <h1 className="subTitle pb-[12px]">Location</h1>
              <p className="para pb-[8px]">5678 Bangla Main Road, cities 580</p>
              <p className="para">GBnagla, example 54786</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCourse;
