import Slider from "../../ClientSide/Shared/Slider/Slider";
import UpCmnTtle from "./UpCmnTtle";

const UpcomingCourses = () => {
  return (
    <div className="sectionGap">
      <UpCmnTtle />
      <div>
        <h3 className="font-gucina text-[70px] text-white font-bold leading-[80px] text-center mt-[ ]">
          Upcoming Courses
        </h3>
      </div>
      <div className="mt-[75px] text-white h-[680px] max-w-[1620px] mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default UpcomingCourses;
