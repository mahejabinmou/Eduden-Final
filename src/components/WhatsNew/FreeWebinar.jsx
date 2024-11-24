import { freeWebinar } from "../../constant/dummyJson";
import FreeWebinarCard from "./FreeWebinarCard";
import UpCmnTtle from "./UpCmnTtle";

const FreeWebinar = () => {
  return (
    <div className="mt-[70px] md:mt-[100px] sectionGap">
      <UpCmnTtle />
      <h3 className="popularCategoryHead text-[20px] text-white md:text-[70px] font-bold font-gucina mt-2 text-center">
        Upcoming Free Webinar
      </h3>
      <div className="webNarContainer mt-[50px] md:mt-[75px]">
        {freeWebinar.map((webinar) => (
          <FreeWebinarCard key={webinar.id} {...webinar} />
        ))}
      </div>
    </div>
  );
};

export default FreeWebinar;
