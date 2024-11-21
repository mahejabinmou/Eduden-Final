import FreeWebinar from "../../components/WhatsNew/FreeWebinar";
import UpcomingCourses from "../../components/WhatsNew/UpcomingCourses";
import UpcominEvents from "../Home/UpcomingEvents/UpcominEvents";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import WhatsNewHero from "./WhatsNewHero";

const WhatsNew = () => {
  return (
    <div>
      <Navbar />
      <WhatsNewHero title={"What's New"} />
      {/* <div className="bg-[#010101] sectionPadding">
        <div className="font-sans mt-[150px] min-h-screen max-w-[1920px] mx-auto"> */}
      <UpcomingCourses />
      <UpcominEvents />
      <FreeWebinar />
      {/* </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default WhatsNew;
